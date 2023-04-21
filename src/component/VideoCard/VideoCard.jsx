import React from 'react'
import { Link } from "react-router-dom";

import css from './VideoCard.module.css'

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className={css.video_card}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} />
      </Link>
      <div className={css.desc}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
          <div className={css.video_title}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </div>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
          <div className={css.channel_title}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "11px", color: "gray", ml: "5px" }} />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard