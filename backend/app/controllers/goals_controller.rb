class GoalsController < ApplicationController

    def index
        goals = Goal.all
        render json: goals
    end

    def show
        goal = Goal.find_by!(id: params[:id])
        render json: goal
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            goal = Goal.new(name: params[:name], date: params[:date], category: params[:category], description: params[:description], user_id: user.id)
            if goal.save
                render json: goal, status: 201
            else
                render json: { errors: goal.errors.full_messages }, status: 422
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end
    
end
