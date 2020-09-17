defmodule TourixWeb.PageController do
  use TourixWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
