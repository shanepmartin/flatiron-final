class CreateSchools < ActiveRecord::Migration[7.0]
  def change
    create_table :schools do |t|
      t.text :name
      t.text :location
      t.text :date
      t.integer :user_id
      t.integer :degree_id

      t.timestamps
    end
  end
end
