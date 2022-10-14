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

  # user session routes...
  get '/users', to: 'users#index'
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'
  post '/login', to: 'users#login'
  post '/logout', to: 'users#logout'

  # user profile routes...
  get '/profile', to: 'users#profile'
  get '/goals/count/:id', to: 'users#goals_count'
  get '/goalslist/:id', to: 'users#goals_list'
  get '/objectivescount/:id', to: 'users#objectives_count'
  get '/objectiveslist/:id', to: 'users#objectives_list'
  get '/tripscount/:id', to: 'users#trips_count'
  get '/tripslist/:id', to: 'users#trips_list'
  get '/achievementscount/:id', to: 'users#_achievements_count'
  get '/achievementslist/:id', to: 'users#achievements_list'
  get '/skillscount/:id', to: 'users#skills_count'
  get '/skillslist/:id', to: 'users#skills_list'
  get '/journeyscount/:id', to: 'users#journeys_count'
  get '/journeyslist/:id', to: 'users#journeys_list'
  get '/feelscount/:id', to: 'users#feels_count'
  get '/feelslist/:id', to: 'users#feels_list'
  get '/contactscount/:id', to: 'users#contacts_count'
  get '/contactslist/:id', to: 'users#contacts_list'

end
