import React from 'react'
import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks';
// use proxy
const API_ENDPOINT = ((process||{env:{NODE_ENV:'development'}}).env['NODE_ENV']||'development')==='development'? '' : 'https://bahnql.herokuapp.com/'


// QUERY MODELS //
const SEARCH_BY_NAME = `
  {
    search( searchTerm: "{{name}}" ) {
      stations{
        name
        stationNumber
      }
    }
  }
`

const GET_BY_NUMBER = `
{
  stationWithStationNumber(stationNumber:{{number}}) {
    name
    stationNumber
    category
    hasWiFi
    hasParking
    hasTaxiRank
    hasTravelNecessities
    hasBicycleParking
    location {
      latitude
      longitude
    }
  }
}
`


export const SearchByName = ({name, renderItem, renderLoading, renderError}) => {
  const {loading, error, data} = useQuery(gql(SEARCH_BY_NAME.replace('{{name}}',name)))
  if (loading) return renderLoading() // 'Loading...';
  if (error) return renderError(error.message) // `Error! ${error.message}`;
  return data.search.stations.map((station) => renderItem({...station, key:String(station.stationNumber)}) )
}

export const GetByNumber = ({number, renderItem, renderLoading, renderError}) => {
  const {loading, error, data} = useQuery(gql(GET_BY_NUMBER.replace('{{number}}',number)))
  if (loading) return renderLoading()
  if (error) return renderError(error.message)
  console.log(data)
  return renderItem(data.stationWithStationNumber)
}

// start apollo
export const client = new ApolloClient({
  uri: API_ENDPOINT,
});
