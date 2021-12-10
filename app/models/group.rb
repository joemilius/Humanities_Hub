class Group < ApplicationRecord
    has_many :memberships, dependent: :destroy
    has_many :invitations, dependent: :destroy
    has_many :users, through: :memberships
    has_many :movies
    has_many :musics
    has_many :books
    has_many :activities

    accepts_nested_attributes_for :memberships

    validates :group_name, presence: true, uniqueness: true
end
