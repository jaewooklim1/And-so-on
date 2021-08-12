# == Schema Information
#
# Table name: products
#
#  id :bigint           not null, primary key
#
class Product < ApplicationRecord

    validates :owner_id, presence: true
    validates :title, :info, :price, :category, presence: true

    has_one_attached :photo

    has_many :cart_products, class_name: "Cart", foreign_key: :product_id

    has_many :reviews, class_name: :Review, primary_key: :id, foreign_key: :product_id


    def self.search(keyword)
        self.where("title ILIKE ?", "%#{keyword}%")
    end
end
