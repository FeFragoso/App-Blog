import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export default function Detail(){
  return(
    <View style={s.container}>
      <Text style={s.h1}>Página de Detalhes</Text>
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