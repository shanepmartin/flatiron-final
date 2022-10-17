class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.text :name
      t.text :phone_number
      t.text :address

      t.timestamps
    end
  end
end
