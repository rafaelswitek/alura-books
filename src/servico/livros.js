import axios from "axios";

const LivrosAPI = axios.create({
    baseURL: 'http://localhost:8000/livros'
})


async function getLivros() {
    const response = await LivrosAPI.get('/')

    return response.data
}

export {
    getLivros
}