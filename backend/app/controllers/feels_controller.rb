class FeelsController < ApplicationController

    def index
        feels = Feel.all
        render json: feels
    end

    def show
        feel = Feel.find_by!(id: params[:id])
        render json: feel
    end

    def create
        feel = Feel.create!(feel_params)
        render json: feel
    end

    private

    def feel_params
        params.permit(:date, :time, :entry)
    end
    
end
