class CreateAchievements < ActiveRecord::Migration[7.0]
  def change
    create_table :achievements do |t|
      t.text :name
      t.text :date
      t.text :category
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
