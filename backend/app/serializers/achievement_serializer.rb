class AchievementSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :category, :description, :user_id
end
