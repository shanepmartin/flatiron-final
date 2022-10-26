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
        school_id = School.find_by!(id: params[:id])
        school = School.find_by!(id: school_id)
        degree = Degree.new(name: params[:name], level: params[:level], school_id: school.id)
        if degree.save
            render json: degree
        else
            render json: { errors: degree.errors.full_messages }
        end
    end

    private

    def degree_params
        params.permit(:name, :level, :school_id)
    end
end
