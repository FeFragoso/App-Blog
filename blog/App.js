import React from "react"
import { StatusBar } from "react-native"

import Home from "./src/pages/Home"

export default function App(){
  return(
    <>
      <StatusBar backgroundColor="#232630" barStyle='light-content'/>
      <Home/>
    </>
  )
}