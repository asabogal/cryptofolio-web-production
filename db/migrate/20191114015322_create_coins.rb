class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :symbol
      t.string :name
      t.integer :user_id

      t.timestamps
    end
  end
end
