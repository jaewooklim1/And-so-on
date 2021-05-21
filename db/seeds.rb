# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# 
# demo_user = User.create!(username: 'Test User', email: 'testuser@gmail.com', password:'123456')

require 'open-uri'

Product.destroy_all

product1 = Product.create!(title: "Set of Spoons", info: "A set of 50 spoons", owner_id: "1", price: "19.99", category: "silverware")
file = open('./app/assets/images/set_of_spoons.jpg')
product1.photo.attach(io: file, filename: 'set_of_spoons.jpg')
product1.save!

product2 = Product.create!(title: "Hamster Wheel", info: "A hamster wheel. Perfect for getting exercise for your hamster", owner_id: "2", price: "23.99", category: "pet supplies")
file1 = open('./app/assets/images/hamster+wheel.jpg')
product2.photo.attach(io: file1, filename: 'hamster+wheel.jpg')
product2.save!

product3 = Product.create!(title: "Dog Food", info: "A box of dry dog good. Perfect for your growing dog", owner_id: "2", price: "13.99", category: "pet supplies")
file2 = open('./app/assets/images/dog+food.jpg')
product3.photo.attach(io: file2, filename: 'dog+food.jpg')
product3.save!

product4 = Product.create!(title: "Oculoid Headset", info: "Enter the world of virtual reality with the new oculoid headset. With 480p and controllers, feel like you're in the game today!", owner_id: "3", price: "299.99", category: "video game consoles")
file3 = open('./app/assets/images/oculus+headset.jpg')
product4.photo.attach(io: file3, filename: 'oculus+headset.jpg')
product4.save!

product5 = Product.create!(title: "Duffel Bag", info: "96L Travel Duffle Bag Foldable for Men Women, Black ", owner_id: "4", price: "9.99", category: "travel supplies")
file4 = open('./app/assets/images/duffel_bag.jpg')
product5.photo.attach(io: file4, filename: 'duffel_bag.jpg')
product5.save!

product6 = Product.create!(title: "Tennis Shoes", info: "Size 9 Tennis Shoes. Perfect for....well....tennis", owner_id: "5", price: "45.99", category: "footwear")
file5 = open('./app/assets/images/tennis_shoes.jpg')
product6.photo.attach(io: file5, filename: 'tennis_shoes.jpg')
product6.save!

product7 = Product.create!(title: "ii-Phone", info: "The new ii-Phone from App-ill. Boasting 250 gigs of ram and 24 square inches of screen-space", owner_id: "7", price: "1999.99", category: "phones")
file6 = open('./app/assets/images/iiphone.jpg')
product7.photo.attach(io: file6, filename: 'iiphone.jpg')
product7.save!

# product8 = Product.create!(title: "Plasma TV", info: "A Plasma TV", owner_id: "2", price: "179.99", category: "Electronics")

# product9 = Product.create!(title: "24 Inch TV", info: "24 Inch TV", owner_id: "2", price: "159.99", category: "Electronics")

# product10 = Product.create!(title: "30 Inch TV", info: "30 Inch TV", owner_id: "2", price: "333.99", category: "Electronics")

# product11 = Product.create!(title: "MH 4k Smart TV", info: "New MH Smart TV. 77 Inches", owner_id: "2", price: "3496.99", category: "Electronics")

# product12 = Product.create!(title: "Pair of 5 lb dumbbells", info: "A pair of 5lb dumbbells", owner_id: "6", price: "9.99", category: "Exercise")

# product13 = Product.create!(title: "Jumprope", info: "Stay in shape without that much space. New 5 foot jumprope", owner_id: "2", price: "6.99", category: "Exercise")

# product14 = Product.create!(title: "Yoga Ball", info: "Save on Gaiam Balance Ball, Base & Resistance Band Kit, 65cm Yoga Ball Chair", owner_id: "2", price: "16.99", category: "Exercise")

# product15 = Product.create!(title: "Treadmill", info: "Stay in shape and build cardio without ever leaving your house", owner_id: "2", price: "644.99", category: "Exercise")

# product16 = Product.create!(title: "Fitbyte", info: "Fitbit Inspire 2 Health & Fitness Tracker", owner_id: "2", price: "98.99", category: "Exercise")

# product17 = Product.create!(title: "Earbuds (2nd Gen)", info: "Wireless earbuds with active noise cancellation and Alexa", owner_id: "4", price: "119.99", category: "electronics")

# product18 = Product.create!(title: "Portable Speaker", info: "Echo Studio - High-fidelity smart speaker with 3D audio and Alexa", owner_id: "4", price: "199.99", category: "electronics")

# product19 = Product.create!(title: "Headphones", info: "Headphones with sound cancelling technology", owner_id: "4", price: "223.99", category: "electronics")

# product20 = Product.create!(title: "Shower Speaker", info: "Waterproof Speakers", owner_id: "4", price: "123.99", category: "electronics")


