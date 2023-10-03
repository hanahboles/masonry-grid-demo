import axios from 'axios'

const searchImages = async (query) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID IBYhMtseoVWKpn3IghpvUxSZes3u2v5qG7qnDja6qiI'
        },
        params: {
            query,
            per_page: '20',    
        }
    })
    return response.data.results
}

export default searchImages