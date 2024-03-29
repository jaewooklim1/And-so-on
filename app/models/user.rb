# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#
class User < ApplicationRecord

    attr_reader :password

    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :cart_products, 
    class_name: "Cart_Product", 
    foreign_key: :user_id

    has_many :authored_reviews,
    class_name: :Review,
    primary_key: :id,
    foreign_key: :user_id

 
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
                
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::base64
        self.save!
        self.session_token
    end
end
