class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :image
      t.string :description
      t.int :likes
      t.int :dislikes
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
