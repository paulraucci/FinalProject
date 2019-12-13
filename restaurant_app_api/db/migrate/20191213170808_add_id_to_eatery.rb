class AddIdToEatery < ActiveRecord::Migration[6.0]
  def change
    add_column :eateries, :cityId, :integer
  end
end
