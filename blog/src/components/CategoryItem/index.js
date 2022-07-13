import React from "react"
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native"

export default function CategoryItem({ data }){

    const navi = useNavigation()

    function handleNavigate(){
        navi.navigate('Category', {id: data.id, title: data?.attributes?.name})
    }

    return(
        <TouchableOpacity
            style={s.container}
            activeOpacity={0.9}
            onPress={handleNavigate}
        >

            <Image
                style={s.icon}
                source={{ uri: `http://192.168.0.11:1337${data.attributes?.icon?.data?.attributes?.url}` }}
            />

            <Text style={s.name}>{ data.attributes?.name }</Text>

        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        marginLeft: 8,
        marginVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    icon:{
        width: 40,
        height: 40
    },
    name:{

    }
})