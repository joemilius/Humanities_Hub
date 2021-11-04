class CreateBookComments < ActiveRecord::Migration[6.1]
  def change
    create_table :book_comments do |t|
      t.int :stars
      t.string :content
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
