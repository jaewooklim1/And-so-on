class Api::CartsController < ApplicationController
    
    def create
        @cart_product = Cart_Product.new(cart_product_params)
        if @cart_product.save
            render :show
        else
            render :json ['cannot save item'], status: 422
        end
    end

    def show
        @cart_product = Cart_Product.find(params[:id])
    end
    
    def index 
        @cart_products = current_user.cart_products
    end

    def destroy
        @cart_product = Cart_Product.find(params[:id])
        @cart_product.destroy 
        render :show
    end

    private
    def cart_product_params 
        params.require(:cartProduct).permit(:user_id, :product_id)
    end

end
