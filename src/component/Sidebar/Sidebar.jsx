import React from 'react'
import css from './Sidebar.module.css'

import { categories } from "../../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className={css.sidebar}>
      {
        categories.map((category) => (
          <button
            className={css.category_btn}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            style={{ background: category.name === selectedCategory ? "red" : "transparent" }}
          >

            <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
              {category.icon}
            </span>

            <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8", color: 'white' }}>
              {category.name}
            </span>

          </button>
        ))
      }
    </div>
  )
}

export default Sidebar
