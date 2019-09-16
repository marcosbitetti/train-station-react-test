import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, CircularProgress, Card, CardHeader, CardContent, CardMedia, CardActions  } from '@material-ui/core';

import {client} from '../services/graphql'
import logo from '../assets/logo.svg';
import {SearchByName} from '../services/graphql'
import Header from '../components/Header'
import './Home.scss'

import { Wifi, LocalParking, LocalTaxi, AddShoppingCart, DirectionsBike } from '@material-ui/icons';

function Home() {

  const [searchTerm, setSearchTerm] = useState('Hannover')
  const iconSize = 32
  return (
    <div>
      <Header change={ (term) => setSearchTerm(term) }/>

      <Container display="flex" className="home-container">

        <SearchByName
          name={searchTerm}
          renderItem={(item) => {
            return (
              <Card className="card-item" key={item.key}>
                <CardContent>
                  <h5> {item.name}</h5>
                  <sub>#{item.stationNumber}</sub>
                </CardContent>
              </Card>
            )
          }}
          renderLoading={() => {
            return (
              <CircularProgress className="progress" color="secondary" />
            )
          }}
          renderError={(message) => {
            return (
              <h3 class="error">{message}</h3>
            )
          }}
          />

      </Container>

      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



        <Link to="/about/">About</Link>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  )
}

export default Home;
