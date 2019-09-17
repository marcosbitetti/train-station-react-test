import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'

import {client} from './services/graphql'

import './App.scss'
import Home from './screens/Home'
import Detail from './screens/Detail'
import About from './screens/About'




function ApplicationRoot() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter className="App">
        <Route path="/" exact component={Home} />
        <Route path="/detail/:stationNumber" component={Detail} />
        <Route path="/about/" component={About} />
      </BrowserRouter>
      <div className="powered">marcosbitetti@gmail.com</div>
    </ApolloProvider>
  );
}

export default ApplicationRoot;
