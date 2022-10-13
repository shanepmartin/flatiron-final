class JourneysController < ApplicationController

    def index
        journeys = Journey.all
        render json: journeys
    end

    def show
        journey = Journey.find_by!(id: params[:id])
        render json: journey
    end

    def create
        journey = Journey.create!(journey_params)
        render json: journey
    end

    def update
        journey = Journey.find_by!(id: params[:id])
        journey.update(journey_params)
        render json: journey
    end

    private 

    def journey_params
        params.permit(:country, :city, :log)
    end
    
end
