class Api::ProjectsController < ApplicationController
    
    
    def index
        @projects = Project.all
        render json: @projects
    end

    def create
        @project = Project.create!(project)_params)
        redirect_to project_path(@project)
    end

    def show
        @project = Project.find(params[:id])
        render json: @project
    end

    def update
        @project = Project.find(params[:id])
        @project.update!(project_params)
        redirect_to artist_path(@project)
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        redirect_to projects_path
    end

    private

    def project_params
        params.require(:project).permit(:name, :description, :pictureURL, :deployedURL, :githubURL, :backgroundColor)
    end


end
