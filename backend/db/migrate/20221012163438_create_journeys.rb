class CreateJourneys < ActiveRecord::Migration[7.0]
  def change
    create_table :journeys do |t|
      t.string :country
      t.string :city
      t.string :log

      t.timestamps
    end
  end
end
