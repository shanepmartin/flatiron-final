class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date, :user_id
end
