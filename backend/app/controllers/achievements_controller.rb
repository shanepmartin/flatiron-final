class AchievementsController < ApplicationController

    def index
        achievements = Achievement.all
        render json: achievements
    end

    def show 
        achievement = Achievement.find_by!(id: params[:id])
        render json: achievement
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            achievement = Achievement.new(name: params[:name], date: params[:date], category: params[:category], description: params[:description], user_id: user.id)
            if achievement.save
                render json: achievement, status: 201
            else 
                render json: { errors: achievement.errors.full_messages }, status: 422
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end
    
end
