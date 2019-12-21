if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_cryptofolio', domain: 'cryptofolio-web-app.herokuapp.com'
else
  Rails.application.config.session_store :cookie_store, key: '_cryptofolio' 
end

