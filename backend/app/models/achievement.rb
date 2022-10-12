class Achievement < ApplicationRecord
    belongs_to :user
    has_many :skills
    has_many :journeys
end
