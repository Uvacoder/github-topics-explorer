# GitHub Topic Explorer
-
## Objective

React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have.

## Dev Notes

1. [apollo-boost](https://www.npmjs.com/package/apollo-boost) package to use Apollo Client.
2. [@apollo/react-hooks](https://www.npmjs.com/package/@apollo/react-hooks) to make use of Apollo Provider and useQuery.
3. [graphql-tag](https://www.npmjs.com/package/graphql-tag) provides template literal tag `gql` to write a concise GraphQL query
4. Implemented Styled Component for button

### How to run app & test

To interact with the GitHub GraphQL API, one need

- a [GitHub API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)

Make use of the key in the .env file within your application

1. Please run `npm i && npm start` to install modules and start the app
2. Click on each button to see related topics
