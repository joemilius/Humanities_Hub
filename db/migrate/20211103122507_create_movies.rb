class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.int :year
      t.string :description
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
