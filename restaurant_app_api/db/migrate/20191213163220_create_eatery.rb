class CreateEatery < ActiveRecord::Migration[6.0]
  def change
    create_table :eateries do |t|
      t.string :name
      t.string :location
      t.string :rating
      t.string :cuisine
    end
  end
end
