require 'pry'
class CoinsController < ApplicationController

  def index
  end

  def show
    @coin = CoinService.find_coin(params[:slug])
    if @coin['Response']
      render json: {
        errors: [@coin['Message']]
      }
     else 
      render json: {
        coin: @coin['Data'][0]
      } 
    end
  end

  def create
  end

  def destroy
  end

end
