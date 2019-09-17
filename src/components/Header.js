import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core';
import { Menu as MenuIcon, Search as SearchIcon, Home } from '@material-ui/icons';

import {client} from '../services/graphql'
import logo from '../assets/logo.svg';
import './Header.scss'

import {SEARCH_BY_NAME} from '../services/graphql'


const TYPING_DELAY = 250

let timeoutId = null


function Header(props) {

  const useBack = props.change?false:true
  const change = props.change||function(){}

  const _search = (evt) => {
    if (timeoutId) clearTimeout(timeoutId)
    if ((evt.target.value||'').length) {
      const searchValue = evt.target.value
      timeoutId = setTimeout( function() {
        props.change(searchValue)
      }, TYPING_DELAY )
    }
  }



  return (
    <AppBar position="static">
      <Toolbar>

        <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="open drawer"
          >
          <img src={logo} className="App-logo" alt="logo" /> {/*<MenuIcon />*/}
        </IconButton>

        {!useBack &&<div className="search">
          <div className="searchIcon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onKeyUp={ _search }
            autoFocus={true}
          />
        </div>}

        {useBack && <Link to="/" className="back">
          <Home />
          <h6>Home</h6>
        </Link>}

      </Toolbar>
    </AppBar>
  )
}



export default Header;
