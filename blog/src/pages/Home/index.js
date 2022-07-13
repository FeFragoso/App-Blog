import React, { useEffect, useState } from "react"
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

export default function Home(){

  const navi = useNavigation()

  return(
    <SafeAreaView style={s.container}>

      <View style={s.header}>
        
        <Text style={s.h1}>DevBlog</Text>

        <TouchableOpacity
          onPress={ ()=> navi.navigate('Search') }
        >

          <Feather
            name="search"
            size={24}
            color='#fff'
          />

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  container:{
    backgroundColor: '#232630',
    flex: 1,
    
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 24
  },
  h1:{
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold'
  }
})