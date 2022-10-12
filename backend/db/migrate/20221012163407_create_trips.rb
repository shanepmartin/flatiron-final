class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.string :country
      t.string :city
      t.string :description

      t.timestamps
    end
  end
end
