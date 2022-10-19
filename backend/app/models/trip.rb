class Trip < ApplicationRecord
    belongs_to :goal
    has_one :user, through: :goal, serializer: TripSerializer
end
