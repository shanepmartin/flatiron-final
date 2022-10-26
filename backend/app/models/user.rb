class User < ApplicationRecord
    has_secure_password

    has_many :achievements
    has_many :contacts
    has_many :feels
    has_many :goals
    has_many :schools
    has_many :trips

    has_many :degrees, through: :schools
    has_many :memories, through: :trips
    

    validates :username, uniqueness: true
end
