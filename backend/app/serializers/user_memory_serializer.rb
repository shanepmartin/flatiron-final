class UserMemorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description

  has_one :user
end
