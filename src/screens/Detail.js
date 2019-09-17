import React from 'react'
import { Container, Box, Tooltip, CircularProgress, Card, CardContent, CardMedia  } from '@material-ui/core';
import GoogleMap from '../components/GMap'

// selected resources
import { Wifi, LocalParking, LocalTaxi, AddShoppingCart, DirectionsBike } from '@material-ui/icons';

import {addHistory} from '../services/history'
import {GetByNumber} from '../services/graphql'
import Header from '../components/Header'
import './Detail.scss'


const iconSize = 32
const TXT_WIFI = 'WIFI available'
const TXT_PARKING = 'Parking available'
const TXT_BICICLY = 'Bicycle Parking available'
const TXT_NECESSITIES = 'Travel Necessities available'
const TXT_TAXI = 'Taxi Rank available'

function Detail(props) {
  const {stationNumber} = props.match.params

  return (
    <div>
      <Header />

      <Container display="flex" className="detail-container">

        <GetByNumber number={stationNumber}
          renderItem={(item) => {

            addHistory(item)

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
                      {item.hasWiFi && <Tooltip disableFocusListener title={TXT_WIFI}><Wifi size={iconSize} /></Tooltip>}
                      {item.hasParking && <Tooltip disableFocusListener title={TXT_PARKING}><LocalParking size={iconSize} /></Tooltip>}
                      {item.hasTaxiRank && <Tooltip disableFocusListener title={TXT_TAXI}><LocalTaxi size={iconSize} /></Tooltip>}
                      {item.hasTravelNecessities && <Tooltip disableFocusListener title={TXT_NECESSITIES}><AddShoppingCart size={iconSize} /></Tooltip>}
                      {item.hasBicycleParking && <Tooltip disableFocusListener title={TXT_BICICLY}><DirectionsBike size={iconSize} /></Tooltip>}
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
