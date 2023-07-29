import React from "react"
import ReactDOM from "react-dom"
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

import Contents from "./components/Sidebar"
import SearchBar from "./components/SearchBar";
import Results from "./components/Results";

//URQL
const client = new Client({
  url: "/graphql",
  exchanges: [cacheExchange, fetchExchange],
  // fetchOptions: () => {
  //   const token = getToken();
  //   return {
  //     headers: { authorization: token ? `Bearer ${token}` : '' },
  //   };
  // },
});

if (document.querySelector("#render-react-sidebar")) {
  ReactDOM.render(<Provider value={client}><Contents /></Provider>, document.querySelector("#render-react-sidebar"))
}

if (document.querySelector("#search-bar-main")) {
  ReactDOM.render(<Provider value={client}><SearchBar /></Provider>, document.querySelector("#search-bar-main"))
}

if (document.querySelector("#result-list")) {
  ReactDOM.render(<Provider value={client}><Results /></Provider>, document.querySelector("#result-list"))
}