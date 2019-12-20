class CreateCoins < ActiveRecord::Migration[5.2]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :symbol
      t.string :imageUrl
      t.integer :user_id

      t.timestamps
    end
  end
end
