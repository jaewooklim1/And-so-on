@cart_products.each do |cart_products|
    json.set! cart_products.id do
        json.extract! cart_products, :id, :user_id, :product_id
    end
end