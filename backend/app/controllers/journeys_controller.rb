class JourneysController < ApplicationController

    def index
        journeys = Journey.all
        render json: journeys
    end

    def show
        journey = Journey.find_by!(id: params[:id])
        render json: journey
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            journey = Journey.new(name: params[:name], description: params[:description], user_id: user.id)
            if journey.save
                render json: journey, serializer: JourneySerializer, status: 201
            else
                render json: { errors: contact.errors.full_messages }, status: 422
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end

    def update
        journey = Journey.find_by!(id: params[:id])
        journey.update(journey_params)
        render json: journey
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

    def journey_params
        params.permit(:name, :description)
    end
    
end
