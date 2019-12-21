Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show]
  get '/users/:id/user_coins', to: 'users#user_coins'

  resources :coins, only: [:index, :show, :create, :destroy ], param: :slug
  get '/history', to: 'coins#get_historical_data'
  get '/democoins', to: 'coins#get_demo_coins'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  
end
