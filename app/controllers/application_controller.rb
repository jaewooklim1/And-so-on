class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?
    #CELLL

    # protect_from_forgery with: :null_session
  
    def current_user
      @current_user ||= User.find_by(session_token: session[:session_token])
    end 

  
    def login!(user)
      session[:session_token] = user.reset_session_token!
    end
  
    def logged_in?
      !!current_user
    end
  
    def logout!
      current_user.reset_session_token! if logged_in?
      session[:session_token] = nil
      @current_user = nil
    end
  
    def ensure_logged_in
      render json: ["Invalid user"], status: 404 unless logged_in?
    end
  

  end