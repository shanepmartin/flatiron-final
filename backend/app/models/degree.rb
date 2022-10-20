class Degree < ApplicationRecord
    belongs_to :school
    has_one :user, through: :school
end
