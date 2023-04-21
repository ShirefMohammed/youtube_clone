import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import css from './SearchFeed.module.css'

import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { Videos } from "../";

const SearchFeed = () => {
    const [videos, setVideos] = useState(null);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return (
        <div className={css.search_videos}>
            <div className={css.results_message}>
                Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
            </div>
            <Videos videos={videos} />
        </div>
    );
};

export default SearchFeed;
