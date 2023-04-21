import React, { useEffect, useState } from "react";

import css from './Feed.module.css'

import { Sidebar, Videos } from '../';
import { fetchFromAPI } from "../../utils/fetchFromAPI";


const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        setVideos(null);
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory]);

    return (
        <div className={css.feed}>

            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

            <div className={css.videos_section}>
                <span className={css.videos_category_title}>
                    {selectedCategory}
                    <span style={{ color: 'red' }}> Videos</span>
                </span>
                <Videos videos={videos} />
            </div>

        </div>
    )
}

export default Feed
