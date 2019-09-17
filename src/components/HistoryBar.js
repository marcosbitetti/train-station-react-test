import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Chip, Toolbar, IconButton, InputBase } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon } from '@material-ui/icons';

import {client} from '../services/graphql'
import {getHistory} from '../services/history'
import logo from '../assets/logo.svg';
import './HistoryBar.scss'

import {SEARCH_BY_NAME} from '../services/graphql'


const TYPING_DELAY = 250

let timeoutId = null


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
