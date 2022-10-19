class FeelSerializer < ActiveModel::Serializer
  attributes :id, :date, :time, :entry, :user_id
end
