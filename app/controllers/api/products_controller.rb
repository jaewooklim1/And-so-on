class Api::ProductsController < ApplicationController

    def index 
        @products = keyword ? Products.search(keyword) : Products.all
        debugger
        render :index
    end

    def show 
        @products = Products.find(params[:id])
        render :show
    end

    private

    def keyword
        params[:keyword]
    end
    
end
