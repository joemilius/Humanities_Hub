class User < ApplicationRecord
    has_secure_password
    has_many :invitations, dependent: :destroy
    has_many :memberships, dependent: :destroy
    has_many :groups, through: :memberships

    
    
end
