import React from 'react'
import { Link } from "react-router-dom";

import css from './Navbar.module.css'

import { logo } from "../../utils/constants";
import { SearchBar } from '../'

const Navbar = () => {
    return (
        <div className={css.navbar}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <SearchBar />
        </div>
    )
}

export default Navbar