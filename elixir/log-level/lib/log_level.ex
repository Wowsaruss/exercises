defmodule LogLevel do
  def to_label(level, legacy?) do
    {level, legacy?}
    |> case do
      {0, false} ->
        :trace
      {1, _} ->
        :debug
      {2, _} ->
        :info
      {3, _} ->
        :warning
      {4, _} ->
        :error
      {5, false} ->
        :fatal
      _ ->
        :unknown
    end
  end

  def alert_recipient(level, legacy?) do
    {level, legacy?}
    |> case do
      {0, false} ->
        false
      {0, true} ->
        :dev1
      {1, _} ->
        false
      {2, _} ->
        false
      {3, _} ->
        false
      {4, _} ->
        :ops
      {5, true} ->
        :dev1
      {5, false} ->
        :ops
      {6, true} ->
        :dev1
      {6, false} ->
        :dev2
      _ ->
        :unknown
    end
  end
end
