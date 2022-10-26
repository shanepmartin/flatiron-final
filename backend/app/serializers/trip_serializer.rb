class TripSerializer < ActiveModel::Serializer
  attributes :id, :country, :city, :date, :user_id
end
