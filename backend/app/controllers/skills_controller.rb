class SkillsController < ApplicationController

    def index
        skills = Skill.all
        render json: skills
    end

    def show
        skill = Skill.find_by!(id: params[:id])
        render json: skill
    end

    def create
        skill = Skill.create!(skill_params)
        render json: skill
    end

    def update
        skill = Skill.find_by!(id: params[:id])
        skill.update(skill_params)
        render json: skill
    end

    private

    def skill_params
        params.permit(:name, :type, :description)
    end
    
end
