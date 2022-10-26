class UserMemorySerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :memories
end
