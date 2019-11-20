require 'pry'
class CoinsController < ApplicationController

  def index
    @coins = CoinService.find_all_coins()
    response = @coins['Data']
    data = []
    response.each do |dat|
      obj = {}
      obj['symbol'] = dat['CoinInfo']['Name']
      obj['name'] = dat['CoinInfo']['FullName']
      obj['imageUrl'] = dat['CoinInfo']['ImageUrl']
      obj['price'] = dat['DISPLAY']['USD']['PRICE']
      obj['openDay'] = dat['DISPLAY']['USD']['OPENDAY']
      obj['changeDay'] = dat['DISPLAY']['USD']['CHANGEDAY']
      obj['changePctDay'] = dat['DISPLAY']['USD']['CHANGEPCTDAY']
      obj['volumeDay'] = dat['DISPLAY']['USD']['VOLUMEDAY']
      obj['supply'] = dat['DISPLAY']['USD']['SUPPLY']
      obj['marketCap'] = dat['DISPLAY']['USD']['MKTCAP']
      data.push(obj)
    end
    render json: {
      coins: data
    }
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
