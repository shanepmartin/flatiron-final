class TripsController < ApplicationController

    def index
        trips = Trip.all
        render json: trips
    end

    def show
        trip = Trip.find_by!(id: params[:id])
        render json: trip
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            trip = Trip.new(country: params[:country], city: params[:city], date: params[:date], user_id: user.id)
            if trip.save
                render json: trip, status: 201
            else
                render json: { errors: trip.errors.full_messages }, status: 201
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end

    def update
        trip = Trip.find_by!(id: params[:id])
        trip.update(trip_params)
        render json: trip
    end


    private

    def trip_params
        params.permit(:country, :city, :date, :user_id)
    end
    
end
