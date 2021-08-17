Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :carts, only: [:index, :show, :create, :destroy]

    resources :products, only: [:show, :index] do 
      resources :reviews, only: [:create, :index, :show]
    end

    resources :reviews, only: [:destroy, :update]
    
  end

  
end
