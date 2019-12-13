class CitiesController < ApplicationController
  before_action :set_city, only: [:show]

  # GET /cities
  def index
    @cities = City.all

    render json: @cities.to_json(include: :eateries)
  end

  # GET /cities/1
  def show
    render json: @city.to_json(include: :eateries)
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_city
      @city = City.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def city_params
      params.require(:city).permit(:location, :city)
    end
end
