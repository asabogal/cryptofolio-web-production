require 'pry'
class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])

    if @user
      render json: {
        user: @user
      }
    else
      render json: {
        status: 500,
        errors: ['user not found']
      }
    end
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!
      render json: {
        status: :created,
        user: @user
      }
    else 
      render json: {
        status: 500,
        errors: @user.errors.full_messages
      }
    end
  end

  def user_coins
    @user = User.find(params[:id])
    @user_coins = @user.coins
    user_symbols = @user_coins.map{|coin| coin['symbol']}
    symbols = user_symbols.join(',')
   
    @coins = CoinService.find_user_coins(symbols)
    response = @coins['DISPLAY']
    data = []

    response.each_with_index do |(key, value), index|
      obj = {}
      obj['symbol'] = key
      obj['price'] = value['USD']['PRICE']
      obj['changeDay'] = value['USD']['CHANGEDAY']
      obj['changePct'] = value['USD']['CHANGEPCTDAY']
      obj['mrktCap'] = value['USD']['MKTCAP']
      data.push(obj)
    end

    render json: {
      status: 200,
      coins: data
    }
  end

  private
  
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end