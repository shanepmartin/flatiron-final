class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone_number, :address, :user_id
end
