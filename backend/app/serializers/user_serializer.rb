class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest

  has_many :objectives
  has_many :trips
  has_many :skills
  has_many :journeys
  
end
