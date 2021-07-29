@cart_products.each do |product|
    json.set! product.id do
        json.extract! product.products, :id, 
        :title, 
        :info,
        :ownder_id, 
        :price, 
        :category,  
        json.photoUrl url_for(product.products.photo)
    end
end