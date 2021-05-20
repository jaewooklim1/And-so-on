class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|

      t.string :title, null: false
      t.string :info, null: false
      t.string :owner_id, null: false
      t.float :price, null: false
      t.string :category, null: false
      
      t.timestamps

    end
  end
end
