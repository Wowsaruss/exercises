defmodule RnaTranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

    iex> RnaTranscription.to_rna(~c"ACTG")
    ~c"UGAC"
  """
  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    dna
    |> to_string()
    |> string_to_string()
    |> to_charlist()
  end
  defp string_to_string(""), do: ""

  defp string_to_string(dna_string) do
    dna_string
    |> String.graphemes
    |> Enum.map(&get_rna/1)
    |> Enum.join("")
  end
  defp get_rna("G"), do: "C"
  defp get_rna("C"), do: "G"
  defp get_rna("T"), do: "A"
  defp get_rna("A"), do: "U"
end
