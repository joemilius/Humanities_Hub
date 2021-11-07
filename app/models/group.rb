class Group < ApplicationRecord
    has_many :memberships, dependent: :destroy
    has_many :invitations, dependent: :destroy
    has_many :users, through: :memberships
    has_many :movies
    has_many :musics
    has_many :books
    has_many :activities
end
