class CreateFeels < ActiveRecord::Migration[7.0]
  def change
    create_table :feels do |t|
      t.integer :user_id
      t.string :date
      t.string :time
      t.string :entry

      t.timestamps
    end
  end
end
