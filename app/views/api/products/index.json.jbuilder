@products.each do |product|
    # debugger
    json.set! product.id do
        json.extract! product, :id, 
        :title, 
        :info, 
        :owner_id, 
        :price, 
        :category     
        json.photoUrl url_for(product.photo)
    end
end