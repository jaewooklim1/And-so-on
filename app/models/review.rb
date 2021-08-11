class Review < ApplicationRecord
    validates :title, :body, :rating, :user_id, presence: true

    belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

    belongs_to :product,
    class_name: :Product,
    primary_key: :id,
    foreign_key: :product_id
end
