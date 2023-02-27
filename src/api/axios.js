export const getPokes = async (limit = 8, offset = 0) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getPokesData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (err) {}
}
