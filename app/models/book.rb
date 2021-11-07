class Book < ApplicationRecord
  belongs_to :group
  has_many :book_comments
end
