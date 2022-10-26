class MemoriesController < ApplicationController

    def index
        memories = Memory.all
        render json: memories
    end

    def show
        memory = Memeory.find_by!(id: params[:id])
        render json: memory
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            memory = Memory.new(name: params[:name], description: params[:description], trip_id: trip.id)
            if memory.save
                render json: memory, serializer: TripMemorySerializer
            else
                render json: { errors: memory.errors.full_messages } 
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end

    private

    def memory_params
        params.permit(:name, :description, :user_id)
    end
    
end
