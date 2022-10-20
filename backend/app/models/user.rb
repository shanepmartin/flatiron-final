class User < ApplicationRecord
    has_secure_password

    has_many :achievements
    has_many :contacts
    has_many :feels
    has_many :goals
    

    validates :username, uniqueness: true
end
