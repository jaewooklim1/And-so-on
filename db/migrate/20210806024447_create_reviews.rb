class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|

      t.string :title, null: false
      t.string :body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :product_id, null: false
    end

    add_index :reviews, :user_id, unique: true 
    add_index :reviews, :product_id, unique: true
  end
end
