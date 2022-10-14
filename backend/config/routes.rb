Rails.application.routes.draw do

  get '/feels', to: 'feels#index'
  get '/feels/id', to: 'feels#show'
  post 'feels', to: 'feels#create'

  get '/journeys', to: 'journeys#index'
  get '/journeys/id', to: 'journeys#show'
  post '/journeys', to: 'journeys#create'
  patch '/journeys', to: 'journeys#update'

  get '/skills', to: 'skills#index'
  get '/skills/id', to: 'skills#show'
  post '/skills', to: 'skills#create'
  patch '/skills', to: 'skills#update'

  get '/achievements', to: 'achievements#index'

  get '/trips', to: 'trips#index'
  get '/trips/id', to: 'trips#show'
  post '/trips', to: 'trips#create'
  patch '/trips', to: 'trips#update'
  delete '/trips', to: 'trips#destroy'

  get '/objectives', to: 'objectives#index'
  get '/objectives/id', to: 'objectives#show'
  post '/objectives', to: 'objectives#create'
  patch '/objectives', to: 'objectives#update'
  delete '/objectives', to: 'objectives#destroy'

  get '/goals', to: 'goals#index'

  get '/contacts', to: 'contacts#index'
  get '/contacts/id', to: 'contacts#show'
  post '/contacts', to: 'contacts#create'
  patch '/contacts', to: 'contacts#update'
  delete '/contacts', to: 'contacts#destroy'

  get '/users', to: 'users#index'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  post '/logout', to: 'users#logout'

  get '/profile', to: 'users#profile'
  #update users
  #delete user 
  #create user 

end
