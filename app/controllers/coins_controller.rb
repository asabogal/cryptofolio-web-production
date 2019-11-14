require 'pry'
class CoinsController < ApplicationController

  def index
    @coins = CoinService.find_coin()
  end

  def show
  end

  def create(params)
    
  end

  def destroy
  end

end
