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
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            feel = Feel.new(date: params[:date], time: params[:time], entry: params[:entry], user_id: user.id)
            if feel.save
                render json: feel, serializer: FeelSerializer, status: 201
            else
                render json: { errors: feel.errors.full_messages }, status: 422
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end

    private

    def feel_params
        params.permit(:date, :time, :entry)
    end
    
end
