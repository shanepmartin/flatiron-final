class Skill < ApplicationRecord
    belongs_to :achievement
    has_one :user, through: :achievement, serializer: SkillSerializer
end
