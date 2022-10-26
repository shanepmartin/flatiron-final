class TripMemorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id

  has_one :user
end
