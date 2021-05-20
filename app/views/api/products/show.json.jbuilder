json.extract! @product, 
:id, 
:title, 
:info, 
:owner_id, 
:price, 
:category     
                    
if @product.photo.attached?
    json.photoUrl url_for(@product.photo)
end
