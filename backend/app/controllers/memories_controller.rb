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
        memory = Memory.create!(memory_params)
        render json: memory
    end

    private

    def memory_params
        params.permit(:name, :description, :trip_id)
    end
    
end
