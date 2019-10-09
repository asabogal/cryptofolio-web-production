class SessionsController < ApplicationController

  def create
    @user = User.find_by(email: session_params[:user][:email])
  
    if @user && @user.authenticate(session_params[:user][:password])
      login!
      render json: { 
        status: :loggedIn
        logged_in: true,
        user: @user
      }
    else
      render json: { 
        status: 401,
        errors: @user.errors.full_messages
      }
    end
  end


  private

  def session_params
    params.require(:user).permit(:username, :email, :password)
  end

end