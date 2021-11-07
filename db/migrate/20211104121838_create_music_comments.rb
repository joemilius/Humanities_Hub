class CreateMusicComments < ActiveRecord::Migration[6.1]
  def change
    create_table :music_comments do |t|
      t.integer :stars
      t.string :content
      t.references :music, null: false, foreign_key: true

      t.timestamps
    end
  end
end
