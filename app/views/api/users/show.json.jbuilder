# json.partial! 'api/users/user', user: @user

json.extract! @user, :username, :id, :email

