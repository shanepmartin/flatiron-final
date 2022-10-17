class ApplicationController < ActionController::Base

    # skip_before_action :verify_authenticity_token

    protect_from_forgery with: :null_session # avoids CSRF error

    #asks the question is user logged in
    def logged_in_user
        headers = request.headers['Authorization']
        if(headers)
            token = headers.split(' ')[1]
            cur_id = JWT.decode(token, 'secret', true, algorithm: 'HS256')
            @current_user = User.find_by(id: cur_id[0]["user_id"])
            @current_user
        end 
    end 

    def get_secret_key
        "123"
    end
  
    def generate_token(user_id)
        JWT.encode({user_id:user_id}, get_secret_key)
    end

    def decode_token(token)
        JWT.decode(token, get_secret_key)[0]["user_id"]
    end

end
