class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :name
      t.string :phone_number
      t.string :address

      t.timestamps
    end
  end
end
