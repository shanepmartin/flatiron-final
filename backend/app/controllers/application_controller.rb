class ApplicationController < ActionController::Base

    # skip_before_action :verify_authenticity_token

    # after_action :add_headers, only: [:create]

    protect_from_forgery with: :null_session # avoids CSRF error

    # def add_headers
    #     response.headers['Authorization'] = 'token'
    # end

    #asks the question is user logged in
    def logged_in_user
        headers = request.headers['Authorization']
        if(headers)
            token = headers.split(' ')[1]
            cur_id = JWT.decode(token, 'token', true, algorithm: 'HS256')
            current_user = User.find_by(id: cur_id[0]["user_id"])
            render json: current_user
        end 
    end 

    def get_secret_key
        "token"
    end
  
    def generate_token(user_id)
        JWT.encode({user_id: user_id}, get_secret_key)
    end

    def decode_token(token)
        JWT.decode(token, get_secret_key)[0]["user_id"]
    end

    # def set_user
    #     user = User.find(id: params[:id])
    # end

end
