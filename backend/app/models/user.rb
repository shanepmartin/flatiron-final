class User < ApplicationRecord
    has_secure_password

    has_many :contacts
    has_many :goals
    has_many :achievements
    has_many :feels
    has_many :objectives, through: :goals
    has_many :trips, through: :goals
    has_many :skills, through: :achievements
    has_many :journeys, through: :achievements

    validates :username, uniqueness: true
end
