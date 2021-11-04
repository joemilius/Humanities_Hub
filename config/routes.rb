Rails.application.routes.draw do
  resources :book_comments
  resources :music_comments
  resources :movie_comments
  resources :comrades
  resources :activities
  resources :books
  resources :musics
  resources :movies
  resources :members
  resources :groups
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
