Rails.application.routes.draw do
  resources :books
  resources :musics
  resources :movies
  resources :members
  resources :groups
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
