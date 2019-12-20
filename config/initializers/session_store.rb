if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_cryptofolio', domain: 'cryptofolio-api.herokuapp.com'
else
  Rails.application.config.session_store :cookie_store, key: '_cryptofolio' 
end

