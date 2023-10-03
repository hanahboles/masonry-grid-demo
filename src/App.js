import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

function App() {
    const [images, setImages] = useState([])
    const initialQuery = 'Paros'

    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        setImages(result)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await searchImages(initialQuery)
            setImages(data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images} />
        </div>
    )
}

export default App