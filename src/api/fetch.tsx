export const getPokes = async (limit = 8, offset = 0): Promise<any> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPokesData = async (url:string): Promise<any> => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) {
    throw new Error(`Failed to fetch data from ${url}: ${err}`)
  }
}

export const searchPokemon = async (pokemon:string): Promise<any> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) {}
}
