Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :message, only: [:index]
    end
  end
  # Defines the root path route ("/")
  root 'root#index'
end
