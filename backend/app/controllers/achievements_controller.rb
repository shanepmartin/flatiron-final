class AchievementsController < ApplicationController

    def index
        achievements = Achievement.all
        render json: achievements
    end
    
end
