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
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            skill = Skill.new(name: params[:name], category: params[:category], description: params[:description], user_id: user.id)
            if skill.save
                render json: skill, serializer: SkillSerializer, status: 201
            else
                render json: { errors: skill.errors.full_messages }, status: 422
            end
        else
            render json: { errors: skill.errors.full_messages }, status: 422
        end
    end

    def update
        skill = Skill.find_by!(id: params[:id])
        skill.update(skill_params)
        render json: skill
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

    private

    def skill_params
        params.permit(:name, :category, :description)
    end
    
end
