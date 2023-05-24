import { useState } from "react";

import searchButton from './img/searchButton.png';
import searchButtonGray from './img/searchButtonGray.png';
import resetButton from './img/resetButton.png';
import tags from './img/tags.png';
import dependency from './img/dependency.png';

import { useLocation } from "react-router-dom";

const SearchBar = ({
        onSearch,
        filtroDependency,
        setFiltroDependency,
        filtroTags,
        setFiltroTags,
    }) => {

    const location = useLocation().pathname

    const handleSubmit = () => {
        onSearch("");
        setInputValue("")
    }

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (e) => {
        const newQuery = e.target.value
        if (newQuery.startsWith(" ") || /^\d/.test(newQuery)) return
        onSearch(newQuery)
        return setInputValue(e.target.value)
    }


    const handleDependencyChange = (e) => {
        const newQuery = e.target.value
        setFiltroDependency(newQuery)
    }

    const handleTagsChange = (e) => {
        const newQuery = e.target.value
        setFiltroTags(newQuery)
    }


    return (
        <div className="searchbar search-form">
            <div className="search-boton">
                <img className="search-boton-img" src={searchButtonGray}/>
                <input placeholder="Search" className={`search`} type='search' onChange={handleInputChange} value={inputValue}/>
            </div>
            {
                location === "/ourteam" &&
                (
                    <div className="teams-select">
                        <div className="tags">
                            <img className="dependency-img" src={dependency}/>
                            <select 
                                required 
                                className="dependency-select"
                                value={filtroDependency}
                                onChange={handleDependencyChange}
                            >
                                <option value="">Dependency</option>
                                <option value="marketing">Marketing</option>
                                <option value="sales">Sales</option>
                                <option value="revenue">Revenue</option>
                            </select>
                        </div>
                        <div className="tags">
                            <img className="tags-img" src={tags}/>
                            <select 
                                required 
                                className="tags-select"
                                value={filtroTags}
                                onChange={handleTagsChange}
                            >
                                <option value="">Tags</option>
                                <option value="trainee">Trainee</option>
                                <option value="junior">Junior</option>
                                <option value="semi-junior">Semi-Junior</option>
                                <option value="semi-senior">Semi-Senior</option>
                                <option value="senior">Senior</option>
                            </select>
                        </div>
                    </div>
                )
            }
            <div className="prueba-search" onClick={handleSubmit}>
                <img className="prueba-search-img" src={resetButton} alt="Imagen Search Button" />
            </div>
        </div>
    )
}

export default SearchBar


