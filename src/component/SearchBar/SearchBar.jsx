import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import css from './SearchBar.module.css'

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

    return (
        <form
            className={css.form_search}
            onSubmit={handleSubmit}
        >
            <input
                className={css.input_search}
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className={css.button_submit}
                type="submit"
            >
                <SearchIcon />
            </button>
        </form>
    );
};

export default SearchBar