class CreateMovieComments < ActiveRecord::Migration[6.1]
  def change
    create_table :movie_comments do |t|
      t.int :stars
      t.string :content
      t.references :movie, null: false, foreign_key: true

      t.timestamps
    end
  end
end
