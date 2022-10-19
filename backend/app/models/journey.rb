class Journey < ApplicationRecord
    belongs_to :achievement
    has_one :user, through: :achievement, serializer: JourneySerializer
end
