import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSubmit }) {
    const [searchTerm, setSearchTerm] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(searchTerm)
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input onChange={handleChange} placeholder="Search for images" type="text" className="input" value={searchTerm}/>   
        </form>
    )
}

export default SearchBar