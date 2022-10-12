class Goal < ApplicationRecord
    belongs_to :user
    has_many :objectives
    has_many :trips
end
