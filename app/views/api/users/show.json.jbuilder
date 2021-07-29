# json.partial! 'api/users/user', user: @user

json.extract! @user, :username, :id, :email


json.cart_products @user.cart_products