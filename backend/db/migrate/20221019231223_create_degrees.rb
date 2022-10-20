class CreateDegrees < ActiveRecord::Migration[7.0]
  def change
    create_table :degrees do |t|
      t.text :name
      t.text :level
      t.integer :school_id

      t.timestamps
    end
  end
end
