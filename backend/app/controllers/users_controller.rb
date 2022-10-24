class UsersController < ApplicationController


    # create user methods...

    def create # for /signup
        user = User.create!(signup_params)
        token = generate_token(user.id)
        render json: user
    end

    def login
        user = User.find_by(username:params[:username]).try(:authenticate, params[:password])
        if user
            token = generate_token(user.id)
            render json: { user: user, token: token }
        else
            render json: {error: "Invalid Password"}, status: 401
        end
    end

    def me
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            render json: user
        else
            render json: {error: "401 incorrect token"}, status: 401
        end
    end

    def show 
        user = User.find_by!(id: params[:id])
        render json: user
    end

    def logout 
        @current_user = nil
        head :no_content
    end

    def index
        users = User.all
        render json: users
    end

    # user profile methods...

    def achievements_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            achievements = user.achievements.length
            render json: achievements
        else
            render json: { errors: achievements.errors.full_messages }
        end
    end

    def contacts_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            contacts = user.contacts.length
            render json: contacts
        else
            render json: { errors: contacts.errors.full_messages }
        end
    end

    def feels_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            feels = user.feels.length
            render json: feels
        else
            render json: { errors: feels.errors.full_messages }
        end
    end

    def goals_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user 
            goals = user.goals.length
            render json: goals
        else
            render json: { errors: goals.errors.full_messages }, status: 422
        end
    end

    private

    def signup_params
        params.permit(:name, :username, :password)
    end

end
