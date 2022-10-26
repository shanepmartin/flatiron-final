class MemoriesController < ApplicationController

    def index
        memories = Memory.all
        render json: memories
    end

    def show
        memory = Memory.find_by!(id: params[:id])
        render json: memory
    end

    # create memories associated with trips...

    def create
        trip_id = Trip.find_by!(id: params[:id])
        trip = Trip.find_by!(id: trip_id)
        memory = Memory.new(name: params[:name], description: params[:description], trip_id: trip.id)
        if memory.save
            render json: memory
        else
            render json: { errors: memory.errors.full_messages } 
        end
    end


    private

    def memory_params
        params.permit(:name, :description, :user_id)
    end
    
end
