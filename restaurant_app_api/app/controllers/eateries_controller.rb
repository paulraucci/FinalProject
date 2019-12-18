class EateriesController < ApplicationController
    before_action :set_eatery, only: [:show]

  # GET /eateries
  def index
    @eateries = Eatery.all.where("city_id = #{params[:city_id]}")

    render json: @eateries
  end

  # GET /eateries/1
  def show
    @eatery = Eatery.all.where("city_id = #{params[:city_id]} AND id = #{params[:id]}")
    render json: @eatery
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_eatery
      @eatery = Eatery.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def eatery_params
      params.require(:eatery).permit(:name,:location,:rating,:cuisine)
    end
end
