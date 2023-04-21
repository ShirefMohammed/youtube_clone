import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import css from './ChannelDetail.module.css'

import { Videos, ChannelCard } from "../";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);


    return (
        <div className={css.channel_detail}>
            <div className={css.top_background}></div>
            <div style={{ marginTop: '-100px', marginBottom: '50px' }}>
                <ChannelCard channel={channelDetail} />
            </div>
            <div className={css.channel_videos}>
                <Videos videos={videos} />
            </div>
        </div>
    )
}

export default ChannelDetail
