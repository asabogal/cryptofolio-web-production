Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  resources :users, only: [:create, :show]

  resources :coins, only: [:index, :show, :create, :destroy ]
end
