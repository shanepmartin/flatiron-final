Rails.application.routes.draw do

  #standard crud routes...
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

  # get names...
  
  # get '/contacts_names', to: 'contacts#names'
  # get '/feels_entries', to: 'feels#entries'
  # get '/journeys_names', to: 'journeys#names'
  # get '/objectives_names', to: 'objectives#names'
  # get '/skills_names', to: 'skills#names'
  # get '/trips_names', to: 'trips_names'
  # get '/usernames', to: 'users#names'

  # user session routes...
  get '/users', to: 'users#index'
  get '/me', to: 'users#me'
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  post '/logout', to: 'users#logout'

  # user profile routes...
  get '/profile', to: 'users#profile'
  get '/goals_count/:id', to: 'users#goals_count'
  get '/goals_list/:id', to: 'users#goals_list'
  get '/objectives_count/:id', to: 'users#objectives_count'
  get '/objectives_list/:id', to: 'users#objectives_list'
  get '/trips_count/:id', to: 'users#trips_count'
  get '/trips_list/:id', to: 'users#trips_list'
  get '/achievements_count/:id', to: 'users#_achievements_count'
  get '/achievements_list/:id', to: 'users#achievements_list'
  get '/skills_count/:id', to: 'users#skills_count'
  get '/skills_list/:id', to: 'users#skills_list'
  get '/journeys_count/:id', to: 'users#journeys_count'
  get '/journeys_list/:id', to: 'users#journeys_list'
  get '/feels_count/:id', to: 'users#feels_count'
  get '/feels_list/:id', to: 'users#feels_list'
  get '/contacts_count/:id', to: 'users#contacts_count'
  get '/contacts_list/:id', to: 'users#contacts_list'

end
