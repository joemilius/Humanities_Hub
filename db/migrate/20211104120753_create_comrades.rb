class CreateComrades < ActiveRecord::Migration[6.1]
  def change
    create_table :comrades do |t|
      t.boolean :admin
      t.references :user, null: false, foreign_key: true
      t.references :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
