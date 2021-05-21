class Api::ProductsController < ApplicationController

    def index 
        # @products = keyword ? Products.search(keyword) : Products.all
        @products = Product.all
        # debugger
        render :index
    end

    def show 
        @product = Product.find(params[:id])
        render :show
    end

    private

    def keyword
        params[:keyword]
    end
    
end
