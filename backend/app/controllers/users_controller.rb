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

    # user profile count methods...

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

    def degrees_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            degrees = user.degrees.length
            render json: degrees
        else
            render json: { errors: degrees.errors.full_messages }
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

    def memories_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            memeories = user.memories.length
            render json: memories
        else
            render json: { errors: memeories.errors.full_messages }
        end
    end

    def schools_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            schools = user.schools.length
            render json: schools
        else
            render json: { errors: schools.errors.full_messages }
        end
    end

    def trips_count
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            trips = user.trips.length
            render json: trips
        else
            render json: { errors: trips.errors.full_messages }
        end
    end

    # user profile list methods...

    def achievements_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            achievements = user.achievements
            render json: achievements
        else
            render json: { errors: achievements.errors.full_messages }
        end
    end

    def contacts_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            contacts = user.contacts
            render json: contacts
        else
            render json: { errors: contacts.errors.full_messages }
        end
    end

    def degrees_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            degrees = user.degrees
            render json: degrees
        else
            render json: { errors: degrees.errors.full_messages }
        end
    end

    def feels_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            feels = user.feels
            render json: feels
        else
            render json: { errors: feels.errors.full_messages }
        end
    end

    def goals_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            goals = user.goals
            render json: goals
        else
            render json: { errors: goals.errors.full_messages }
        end
    end

    def memories_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            memories = user.memories
            render json: memories
        else
            render json: { errors: memories.errors.full_messages }
        end
    end


    def schools_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            schools = user.schools
            render json: schools
        else
            render json: { errors: schools.errors.full_messages }
        end
    end

    def trips_list 
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            trips = user.trips
            render json: trips
        else
            render json: { errors: trips.errors.full_messages }
        end
    end

    private

    def signup_params
        params.permit(:name, :username, :password)
    end

end
