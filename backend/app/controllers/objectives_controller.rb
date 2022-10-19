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
        objective = Objective.find_by!(id: params[:id])
        objective.destroy
        head :no_content
    end

    private

    def objective_params
        params.permit(:name, :category, :description)
    end
    
end
