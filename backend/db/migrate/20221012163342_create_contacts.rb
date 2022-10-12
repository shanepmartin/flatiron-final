class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :address

      t.timestamps
    end
  end
end
