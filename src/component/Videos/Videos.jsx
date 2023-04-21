import React from 'react'
import css from './Videos.module.css'

import { VideoCard, ChannelCard, Loader } from "../";


const Videos = ({ videos }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className={css.videos_container}>
      {
        videos.map((item, idx) => (
          <div className={css.item} key={idx} >
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </div>
        ))
      }
    </div>
  )
}

export default Videos
