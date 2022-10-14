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

    # change the update methods to this format!!!

    # def update
    #     company = Company.find_by(id: params[:id])
    #     if company
    #         if params[:name]
    #             company.update(name: params[:name])
    #         end
    #         if params[:website]
    #             company.update(website: params[:website])
    #         end
    #         if params[:linkedin_regularCompanyUrl]
    #             company.update(linkedin_regularCompanyUrl: params[:linkedin_regularCompanyUrl])
    #         end
    #         if params[:description]
    #             company.update(description: params[:description])
    #         end
    #     end
    # end

    def destroy
        trip = Trip.find_by!(id: params[:id])
        render json: trip
    end

    private

    def trip_params
        params.permit(:country, :city, :description)
    end
    
end
