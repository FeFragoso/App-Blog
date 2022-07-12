import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export default function Category(){
  return(
    <View style={s.container}>
      <Text style={s.h1}>Categorias</Text>
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