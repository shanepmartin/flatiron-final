class DegreesController < ApplicationController

    def index
        degrees = Degree.all
        render json: degrees
    end

    def show
        degree = Degree.find_by!(id: params[:id])
        render json: degree
    end

    def create
        degree = Degree.create!(degree_params)
        render json: degree
    end

    private

    def degree_params
        params.permit(:name, :level, :school_id)
    end
end
