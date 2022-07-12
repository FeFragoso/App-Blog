import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Detail from "./pages/Detail"
import Category from "./pages/Category"
import Search from "./pages/Search"

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Detail'
                component={Detail}
                options={{
                    title: 'Detalhes',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#232630'
                    }
                }}
            />

            <Stack.Screen
                name="Category"
                component={Category}
                options={{
                    title: 'Categorias',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#232630'
                    }
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Procurando..',
                    headerTintColor: '#fff',
                    headerStyle:{
                        backgroundColor: '#232630'
                    }
                }}
            />
        </Stack.Navigator>
    )
}