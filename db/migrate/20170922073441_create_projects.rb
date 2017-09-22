class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.string :pictureURL
      t.string :deployedURL
      t.string :githubURL
      t.string :backgroundColor

      t.timestamps
    end
  end
end
