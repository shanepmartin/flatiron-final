class ObjectiveSerializer < ActiveModel::Serializer
  attributes :id, :name, :objective, :description

  has_one :user, through: :goal
end
