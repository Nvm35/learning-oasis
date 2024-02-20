import supabase from "./supabse";

export async function getCabins() {

  const { data, error } = await supabase
    .from('cabins')
    .select('*')
  if (error) {
    console.error(error)
    throw new Error("Cabing cpould not be loaded")
  }
  return data;
}