import React from "react"
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Home(){

  const navi = useNavigation()

  return(
    <SafeAreaView style={s.container}>
      <Text style={s.h1}>Fragoso</Text>

      <Button
        title="Detalhes"
        onPress={ ()=> navi.navigate("Detail")}
      />
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