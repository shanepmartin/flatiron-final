class CreateFeels < ActiveRecord::Migration[7.0]
  def change
    create_table :feels do |t|
      t.integer :user_id
      t.text :date
      t.text :time
      t.text :entry

      t.timestamps
    end
  end
end
