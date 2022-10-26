class MemorySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :trip_id
end
