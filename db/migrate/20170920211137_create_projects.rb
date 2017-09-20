class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :picture_url
      t.string :description
      t.string :deployed_url
      t.string :github_url
      t.string :background_color

      t.timestamps
    end
  end
end
