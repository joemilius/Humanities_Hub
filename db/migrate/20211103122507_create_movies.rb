class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.integer :year
      t.string :director
      t.string :cast
      t.string :description
      t.integer :likes
      t.integer :dislikes
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
