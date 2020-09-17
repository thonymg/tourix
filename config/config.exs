# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :tourix,
  ecto_repos: [Tourix.Repo]

# Configures the endpoint
config :tourix, TourixWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "tSumnNyUReMqmYbnmp3skm9zo+MsOH61C0szsHoRk+FY2U+gmsUOzTEewtxaWm4e",
  render_errors: [view: TourixWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Tourix.PubSub,
  live_view: [signing_salt: "OKeWyAoG"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
