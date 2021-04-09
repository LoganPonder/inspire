export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/",
  timeout: 3000
});

// IMAGES API
export const imageApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images",
    timeout: 3000
})

// QUOTE API
export const quoteApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes",
    timeout: 3000
})

// WEATHER API
export const weatherApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
    timeout: 3000
})

// WEATHER API
export const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/logan/todos",
    timeout: 3000
})