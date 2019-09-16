import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, CircularProgress, Card, CardHeader, CardContent, CardMedia, CardActions  } from '@material-ui/core';
import GoogleMap from '../components/GMap'

// selected resources
import { Wifi, LocalParking, LocalTaxi, AddShoppingCart, DirectionsBike } from '@material-ui/icons';

import {client} from '../services/graphql'
import logo from '../assets/logo.svg';
import {GetByNumber} from '../services/graphql'
import Header from '../components/Header'
import './Detail.scss'


const iconSize = 32

function Detail(props) {
  const {stationNumber} = props.match.params

  return (
    <div>
      <Header />

      <Container display="flex" className="detail-container">

        <GetByNumber number={stationNumber}
          renderItem={(item) => {
            return (
              <Card className="card">
                <CardMedia>
                  <GoogleMap
                    className="map"
                    center={{lat:item.location.latitude,lng:item.location.longitude}}
                    />
                </CardMedia>
                <CardContent>
                  <Container className="card-detail">
                    <h3>{item.name}</h3>
                    <Box className="services">
                      {item.hasWiFi && <Wifi size={iconSize} />}
                      {item.hasParking && <LocalParking size={iconSize} />}
                      {item.hasTaxiRank && <LocalTaxi size={iconSize} />}
                      {item.hasTravelNecessities && <AddShoppingCart size={iconSize} />}
                      {item.hasBicycleParking && <DirectionsBike size={iconSize} />}
                    </Box>
                  </Container>
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

    </div>
  )
}

export default Detail;
