import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import App from './App';

const API_KEY = process.env.REACT_APP_GITHUB_KEY; 
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `bearer ${API_KEY}`
  }
});

// Apollo Provider to wrap the App, places the client on context
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


