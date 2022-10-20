class SchoolsController < ApplicationController

    def index
        schools = School.all
        render json: schools
    end

    def show
        school = School.find_by!(id: params[:id])
        render json: school
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            school = School.new(name: params[:name], location: params[:location], date: params[:date], user_id: user.id)
            if school.save
                render json: school, status: 201
            else
                render json: { errors: school.errors.full_messages }, status: 422
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end
end
