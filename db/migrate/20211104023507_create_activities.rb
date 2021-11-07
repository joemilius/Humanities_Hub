class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :activity_name
      t.string :description
      t.integer :votes
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
