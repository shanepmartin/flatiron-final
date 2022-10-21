Rails.application.routes.draw do

  #standard crud routes...

  get '/achievements', to: 'achievements#index'
  get '/achievements/:id', to: 'achievements#show'
  post '/achievements', to: 'achievements#create'
  patch '/achievements', to: 'achievements#update'

  get '/contacts', to: 'contacts#index'
  get '/contacts/:id', to: 'contacts#show'
  post '/contacts', to: 'contacts#create'
  patch '/contacts/:id', to: 'contacts#update'
  delete '/contacts', to: 'contacts#destroy'

  get '/degrees', to: 'degrees#index'
  get '/degrees/:id', to: 'degrees#show'
  post '/degrees', to: 'degrees#create'

  get '/feels', to: 'feels#index'
  get '/feels/:id', to: 'feels#show'
  post 'feels', to: 'feels#create'

  get '/goals', to: 'goals#index'
  get '/goals/:id', to: 'goals#show'
  post '/goals', to: 'goals#create'
  patch '/goals', to: 'goals#update'
  
  get '/memories', to: 'memories#index'
  get '/memories/:id', to: 'memories#show'
  post '/memories', to: 'memories#create'

  get '/schools', to: 'schools#index'
  get '/schools/:id', to: 'schools#show'
  post '/schools', to: 'schools#create'

  get '/trips', to: 'trips#index'
  get '/trips/:id', to: 'trips#show'
  post '/trips', to: 'trips#create'
  patch '/trips', to: 'trips#update'



  # get names...
  
  # get '/contacts_names', to: 'contacts#names'
  # get '/feels_entries', to: 'feels#entries'
  # get '/journeys_names', to: 'journeys#names'
  # get '/goals_names', to: 'goals#names'
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
  get '/goals_count/:id', to: 'users#goals_count'
  get '/goals_list/:id', to: 'users#goals_list'
  get '/trips_count/:id', to: 'users#trips_count'
  get '/trips_list/:id', to: 'users#trips_list'
  get '/achievements_count/:id', to: 'users#achievements_count'
  get '/achievements_list/:id', to: 'users#achievements_list'
  get '/feels_count/:id', to: 'users#feels_count'
  get '/feels_list/:id', to: 'users#feels_list'
  get '/contacts_count/:id', to: 'users#contacts_count'
  get '/contacts_list/:id', to: 'users#contacts_list'

end
