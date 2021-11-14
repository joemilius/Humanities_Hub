class GroupsController < ApplicationController

    def index
        groups = Group.all.where(public: true)
        render json: groups, status: :ok
    end
end
