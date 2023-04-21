import React from 'react';
import { CircularProgress } from '@mui/material';

import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.loader}>
      <CircularProgress />
    </div>
  )
}

export default Loader
