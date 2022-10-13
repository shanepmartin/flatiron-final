class ObjectivesController < ApplicationController

    def index
        objectives = Objective.all
        render json: objectives
    end

    def show
        objective = Objective.find_by!(id: params[:id])
        render json: objective
    end

    def create
        objective = Objective.create!(objective_params)
        render json: objective
    end

    def update 
        objective = Objective.find_by!(id: params[:id])
        objective.update(objective_params)
        render json: objective
    end

    def destroy
        objective = Objective.find_by!(id: params[:id])
        objective.destroy
        head :no_content
    end

    private

    def objective_params
        params.permit(:name, :type, :description)
    end
    
end
