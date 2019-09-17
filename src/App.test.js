import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Router, Switch } from 'react-router-dom'
import {render, fireEvent, waitForElement, renderWithRouter} from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { MockedProvider } from '@apollo/react-testing'
import gql from 'graphql-tag'

import App from './App';
import {SEARCH_BY_NAME} from './services/graphql'

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

/*const mocksSearch = [
  {
    request: {
      query: gql(SEARCH_BY_NAME.replace('{{name}}','Hannover')),
      variables: {}
    },
    result: {
      data: {
        search:{
          stations:[
            {name:"Hannover Bismarckstraße",stationNumber:2544,__typename:"Station"},
          ]
        }
      }
    }
  }
]*/
const mocksSearch = [
  {
    request: {
      query: gql(SEARCH_BY_NAME.replace('{{name}}','hannover')),
      variables: {}
    },
    result: () =>{
      return {
        data: {
          search:{
            stations:[
              {name:"Hannover Bismarckstraße",stationNumber:2544},
            ]
          }
        }
      }
    }
  }
]


//ReactDOM.render(<App />, document.getElementById('root'));

test('Renders without crashing', async() => {
  const {getByText} = render(<App />)
  expect(getByText('marcosbitetti@gmail.com')) //.toMatch('App-logo')
})

test('Route Detail', async() => {
  const route = '/detail/6424'
  let history = createMemoryHistory({ initialEntries: [route] })
  const {getByText} = render(<Router history={history}><App/></Router>)
  await waitForElement(() => getByText(/^Hannover - Vinnhorst$|^Network error.*/) )
})
