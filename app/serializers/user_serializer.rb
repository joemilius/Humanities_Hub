class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :last_name, :password

  has_many :memberships
  has_many :invitations
  has_many :groups
end
