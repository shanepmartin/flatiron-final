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
        trip = Trip.create(trip_params)
        render json: trip
    end

    def update
        trip = Trip.find_by!(id: params[:id])
        render json: trip
    end

    def destroy
        trip = Trip.find_by!(id: params[:id])
        render json: trip
    end

    private

    def trip_params
        params.permit(:country, :city, :description)
    end
    
end
