import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import css from './VideoDetail.module.css'

import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "../";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => setVideoDetail(data.items[0]))

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => setVideos(data.items))
    }, [id]);

    if (!videoDetail?.snippet) return <Loader />;

    const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

    return (
        <div className={css.video_detail}>
            <div className={css.current_video}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={css.react_player} controls />

                <div className={css.video_title}>
                    {title}
                </div>

                <div className={css.video_statics}>
                    <Link to={`/channel/${channelId}`} className={css.channel_link}>
                        {channelTitle}
                        <CheckCircleIcon sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                    </Link>
                    <div className={css.statics}>
                        <span className={css.views}>
                            {parseInt(viewCount).toLocaleString()} views
                        </span>
                        <span className={css.likes}>
                            {parseInt(likeCount).toLocaleString()} likes
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.videos}>
                <Videos videos={videos} />
            </div>
        </div>
    );
};

export default VideoDetail;
