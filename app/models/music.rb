class Music < ApplicationRecord
  belongs_to :group
  has_many :music_comments
end
