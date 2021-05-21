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

    def self.search(keyword)
        self.where("title ILIKE ?", "%#{keyword}%")
    end
end
