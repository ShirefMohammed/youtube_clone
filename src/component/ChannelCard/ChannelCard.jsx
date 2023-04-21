import React from 'react';
import { Link } from 'react-router-dom';

import css from './ChannelCard.module.css'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from '../../utils/constants';

const ChannelCard = ({ channel }) => {
  return (
    <div className={css.channel_card}>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <img src={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channel?.snippet?.title} />
        <span className={css.channel_title}>
          {channel?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </span>
        {channel?.statistics?.subscriberCount && (
          <span className={css.channel_subscribes} >
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </span>
        )}
      </Link>
    </div>
  )
}

export default ChannelCard