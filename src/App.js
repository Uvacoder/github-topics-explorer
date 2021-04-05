import React from 'react'
import gql from 'graphql-tag'
import './App.css'
import ReactRT from './components/ReactRT'

// Query to get Related Topics from Github GraphQL API
export const RTOPICS = gql`
query getRTopics {
  react: topic(name:"react") {
      relatedTopics {
        id
        name 
        stargazers {
          totalCount
        }
        relatedTopics {
          id
          name
          stargazers{
            totalCount
          }
        }
      }
    }
}
`;

function App() {
    return (
        <main className='App'>
            <h1>Related Topics</h1>               
            <ReactRT />    
        </main>
    )
}

export default App;
