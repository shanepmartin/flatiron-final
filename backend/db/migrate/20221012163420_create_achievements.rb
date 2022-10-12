class CreateAchievements < ActiveRecord::Migration[7.0]
  def change
    create_table :achievements do |t|
      t.integer :user_id
      t.integer :skill_id
      t.integer :journey_id

      t.timestamps
    end
  end
end
