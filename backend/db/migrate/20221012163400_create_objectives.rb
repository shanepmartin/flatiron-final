class CreateObjectives < ActiveRecord::Migration[7.0]
  def change
    create_table :objectives do |t|
      t.string :name
      t.string :type
      t.string :description

      t.timestamps
    end
  end
end
