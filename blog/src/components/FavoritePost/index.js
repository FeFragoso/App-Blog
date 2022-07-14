import React from "react"
import { Text, TouchableOpacity, ImageBackground, Dimensions, StyleSheet } from "react-native"

const { width: WIDTH } = Dimensions.get('window')

export default function FavoritePost({ data }){
    return(
        <TouchableOpacity
            style={s.container}
        >
            <ImageBackground
                source={{ uri: `http://192.168.0.11:1337${data?.attributes?.cover?.data?.attributes?.url}` }}
                style={s.cover}
                resizeMode='cover'
                blurRadius={3}
                imageStyle={{ borderRadius: 6, opacity: 0.4 }}
            >

                <Text style={s.title} numberOfLines={1}>
                    {data?.attributes?.title}
                </Text>

            </ImageBackground>

        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    container:{
        flex: 1,
        marginRight: 8
    },
    cover:{
        borderRadius: 4,
        width: WIDTH-60,
        height: 100,
        justifyContent: 'flex-end',
        backgroundColor: '#232630'
    },
    title:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        paddingVertical: 8,
        paddingHorizontal: 12,
        textShadowColor: '#121212',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 8
    }
})