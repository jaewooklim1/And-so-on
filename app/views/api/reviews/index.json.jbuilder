
@reviews.each do |review|
    # debugger
    json.set! review.id do 
        json.partial! '/api/reviews/review', review: review 
        json.userName review.user.username


    end
end