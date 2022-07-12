import React from "react"
import { SafeAreaView, Text, StyleSheet } from 'react-native'

export default function Search(){
  return(
    <SafeAreaView style={s.container}>
      <Text style={s.h1}>Pesquisar</Text>
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1:{
    color: "#000"
  }
})