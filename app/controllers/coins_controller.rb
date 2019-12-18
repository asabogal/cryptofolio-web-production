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
      obj['imageUrl'] = "https://www.cryptocompare.com#{dat['CoinInfo']['ImageUrl']}"
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

  def get_historical_data
    symbol = params[:symbol]
    period = params[:period]
    market = 'USD'
    api_key = ENV['ALPHAVANTAGE_KEY']
    response = CoinService.get_historical_data(symbol, period, market, api_key)
    response_data = response[response.keys.last].first(10)

    if !response_data.is_a? String
      data = response_data.map do |key, value|
      time = Time.parse(key).to_i * 1000
      price = value["4b. close (USD)"].to_f
      [time, price]
      end.sort
      historical = [
        {
          name: symbol,
          data: data
        }
      ]

      render json: historical
    else
      render json: {
        errors: 'max 5 calls per minute please'
      }
    end
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
    @user = User.find(params[:user][:id])
    @coins = Coin.create(coins_params)
    @user.coins = @coins
    @user.save
    render json: {
      status: :created,
      coins: @coins
    }
  end

  def destroy
  end

  private

  def coins_params
    params.require(:coin).map do |c|
      c.permit(
        :symbol,
        :name,
        :imageUrl
      )
    end
  end

end
