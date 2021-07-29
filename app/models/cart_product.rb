class CartProduct < ApplicationRecord
    validates :user_id, :product_id, presence: true

    belongs_to :users, 
        class_name: "User", 
        foreign_key: :user_id

    belongs_to :products, 
        class_name: "Product", 
        foreign_key: :product_id
end
