class GroupSerializer < ActiveModel::Serializer
  attributes :id, :group_name, :public

  has_many :users
  has_many :invitations
  has_many :memberships
end
