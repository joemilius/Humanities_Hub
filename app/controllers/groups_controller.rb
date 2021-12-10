class GroupsController < ApplicationController
    wrap_parameters format: []


    def index
        groups = Group.where(public: true)
        if groups.valid?
        render json: groups, status: :ok
        else
            render json: {error: groups.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def create
        group = Group.create(group_params)
        if group.valid?
            render json: user, status: :created
        else
            render json: { error: group.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def group_params
        params.permit(:group_name, :public, membership_attributes: [:user_id, :admin])
    end

end
