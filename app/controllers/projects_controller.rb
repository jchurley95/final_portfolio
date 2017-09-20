class ProjectsController < ApplicationController
  def show
    @project = Project.find params[:id]
    render json: @project
  end

  def index
    @projects = Project.all
    render json: @projects
  end

  def create
    @project = Project.create(project_params)
    redirect_to project_path(@project)
  end

  def update
      @project = Project.find params[:id]
      @project.update(project_params)
      redirect_to project_path(@project)
  end

  def destroy
      @project = Project.find(params[:id])
      @project.destroy
      redirect_to projects_path
  end

  private
  def project_params
      params.require(:project).permit(:name, :picture_url, :description, :deployed_url, :github_url, :background_color)
  end
end
