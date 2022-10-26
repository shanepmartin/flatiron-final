class UserDegreeSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :degrees
end
