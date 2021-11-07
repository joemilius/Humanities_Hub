class CreateMusics < ActiveRecord::Migration[6.1]
  def change
    create_table :musics do |t|
      t.string :artist_name
      t.string :image
      t.string :description
      t.integer :likes
      t.integer :dislikes
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
