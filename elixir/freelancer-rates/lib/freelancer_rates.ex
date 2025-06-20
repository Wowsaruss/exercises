defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8.0
  end

  def apply_discount(before_discount, discount) do
    discount_percent = discount / 100.0
    difference = before_discount * discount_percent

    before_discount - difference
  end

  def monthly_rate(hourly_rate, discount) do
    discounted_hourly_rate =
      (hourly_rate * 8) * 22
      |> apply_discount(discount)
      |> Float.ceil()
    truncated_discounted_hourly_rate = trunc(discounted_hourly_rate)

    if truncated_discounted_hourly_rate == discounted_hourly_rate do
      truncated_discounted_hourly_rate
    else
      discounted_hourly_rate
    end
  end

  def days_in_budget(budget, hourly_rate, discount) do
    discounted_hourly_rate = apply_discount(hourly_rate, discount)
    hours_in_budget = budget / discounted_hourly_rate
    days_in_budget = hours_in_budget / 8

    Float.floor(days_in_budget, 1)
  end
end
