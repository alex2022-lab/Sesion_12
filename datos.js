import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const filtrarDatos = async () => {

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")

    .then(response => {

        console.log(response.data)
    })
    .catch(error => console.error('error fetching post: ', error))
}

filtrarDatos();

