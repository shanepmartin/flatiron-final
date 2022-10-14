class UsersController < ApplicationController


    # standard user methods...

    def create # for /signup
        @user = User.create!(signup_params)
        token = JWT.encode({user_id: @user.id}, 'secret')
        render json: {user: @user, token: token}
    end

    def login
        # find by username from body...
        @user = User.find_by!(username: params[:username])
        # check if user exists and password matches password digest...
        if (@user && @user.authenticate(params[:password]))
            # create token for front end...
            token = JWT.encode({user_id: @user.id}, 'secret')
            # pass user instance and token to front end
            render json: {user: @user, token: token}
        end
    end

    def profile
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            render json: user
        else
            render json: { error: "401 incorrect token"}, status: 401
        end
    end

    def show # for /me
        render json: {user: @current_user}
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

    def goals_count
        user = User.find_by!(id: params[:id])
        goals = user.goals.length
        if user 
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
