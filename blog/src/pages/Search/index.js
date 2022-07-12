import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export default function Search(){
  return(
    <View style={s.container}>
      <Text style={s.h1}>Pesquisar</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container:{
    backgroundColor: '#232630',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1:{
    color: "#fff"
  }
})