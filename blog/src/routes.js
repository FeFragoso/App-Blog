import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/Home'
import Detail from "./pages/Detail"

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
            />

            <Stack.Navigator
                name='Detail'
                component={Detail}
            />
        </Stack.Navigator>
    )
}