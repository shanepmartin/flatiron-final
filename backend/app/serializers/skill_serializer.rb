class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :objective, :description, :user_id
end
