class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        users = User.all()
        render json: users, status: :ok
    end


    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :username, :password)
    end
end
