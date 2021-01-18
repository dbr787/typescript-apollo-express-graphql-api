import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Normalize } from 'styled-normalize';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'

import App from "./App";

const link = createHttpLink({
  uri: 'http://localhost:8080/graphql',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Normalize />
      <ApolloProvider client={client}>
        <Route path="/" component={App} />
      </ApolloProvider>
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
