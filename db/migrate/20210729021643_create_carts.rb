class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :cart_products do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false

      t.timestamps
    end
    add_index :cart_products, :user_id
    add_index :cart_products, :product_id
  end
end
