import React, { useEffect, useState } from "react"
import { View, SafeAreaView, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import api from '../../services/api'
import CategoryItem from '../../components/CategoryItem'
import { getFavorite, setFavorite } from "../../services/favorite"
import FavoritePost from '../../components/FavoritePost'

export default function Home(){

  const navi = useNavigation()
  const [categories, setCategories] = useState([])
  const [favCategory, setFavCategory] = useState([])

  useEffect(()=> {

    async function loadData(){
      const category = await api.get('api/categories?populate=icon')
      setCategories(category.data.data)
    }

    loadData()

  }, [])

  useEffect(()=> {

    async function favorite(){
      const response = await getFavorite()
      setFavCategory(response)
    }

  }, [])

  async function handleFavorite(id){
    const response = await setFavorite(id)

    setFavCategory(response)
    alert('Deu certo!')
  }

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

      <FlatList
        style={s.flatlist}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingRight: 12 }}
        data={categories}
        keyExtractor={ (item)=> String(item.id) }
        renderItem={ ({ item })=> (
          <CategoryItem
            data={item}
            favorite={ ()=> handleFavorite(item.id) }
          />
        ) }
      />

      <View style={s.main}>

          {favCategory.length !== 0 && (
            <FlatList
              style={{ marginTop: 50, maxHeight: 100, paddingStart: 18 }}
              contentContainerStyle={{ paddingEnd: 18 }}
              data={favCategory}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={ (item)=> String(item.id) }
              renderItem={ ({ item })=> <FavoritePost data={item} /> }
            />
          )}

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
  },
  flatlist:{
    maxHeight: 115,
    backgroundColor: '#efefef',
    marginHorizontal: 18,
    borderRadius: 8,
    zIndex: 9
  }
})