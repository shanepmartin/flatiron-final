class CreateMemories < ActiveRecord::Migration[7.0]
  def change
    create_table :memories do |t|
      t.text :name
      t.text :description
      t.integer :trip_id

      t.timestamps
    end
  end
end
