class TripSerializer < ActiveModel::Serializer
  attributes :id, :country, :city, :date, :user_id, :memory_id
end
