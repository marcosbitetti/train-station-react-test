import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Chip } from '@material-ui/core';

import {getHistory} from '../services/history'
import './HistoryBar.scss'

function HistoryBar(props) {

  const history = getHistory()

  return (
    <Box className="history-bar">
      {history.map((station) => {
        return (
          <Link to={'/detail/'+station.number} key={station.number}>
            <Chip
              label={station.name}
              className="chip"
              />
          </Link>
        )
      })}
    </Box>
  )
}



export default HistoryBar;
