class CoinService

  def self.find_coin(symbol)
    url = "https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=#{symbol}&tsym=USD"
    resp = Faraday.get url do |req|
    end

    @body = JSON.parse(resp.body)

  end
   @body

end