defmodule Tourix.Repo do
  use Ecto.Repo,
    otp_app: :tourix,
    adapter: Ecto.Adapters.Postgres
end
