class CoinService

  def self.find_coin(symbol)
    url = "https://min-api.cryptocompare.com/data/coin/generalinfo?fsyms=#{symbol}&tsym=USD"
    resp = Faraday.get url do |req|
    end

    @body = JSON.parse(resp.body)
    @body
  end

  def self.find_all_coins
    url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=50&tsym=USD'
    resp = Faraday.get url do |req|
    end

    @body = JSON.parse(resp.body)
    @body
  end

  def self.find_user_coins(symbols)
    url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=#{symbols}&tsyms=USD"
    resp = Faraday.get url do |req|
    end

    @body = JSON.parse(resp.body)
    @body
  end

end