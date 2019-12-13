class RenameColumnForEateries < ActiveRecord::Migration[6.0]
  def change
    rename_column :eateries, :cityId, :city_id
  end
end
