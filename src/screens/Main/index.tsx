import React, {FC} from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import Home from './Home/Home'
import IconBottomHome from "../../static/imgs/icon/IconBottomHome"
import IconBottomBasket from '../../static/imgs/icon/IconBottomBasket'
import Basket from './Basket/Basket'
import Combo from './Combo/Combo'

const Tab = createBottomTabNavigator()

const BottomMenu: FC  = () =>{
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
        tabBarIcon: () => {
            switch (route.name) {
                case "Home":
                    return <IconBottomHome/>
                    break
                case "Basket":
                    return <IconBottomBasket/>
                    break
            }
        },
    })}
    tabBarOptions={{
        activeTintColor: "#f5671a",
            inactiveTintColor: "gray",
    }}
>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Basket" component={Basket} />
    </Tab.Navigator>
)
}


const Lk = createStackNavigator()
const LkStack: FC = () =>{
    return(
        <Lk.Navigator
            screenOptions={{
        headerShown: false
    }}
>
    <Lk.Screen name="BottomTabs" component={BottomMenu} />
    <Lk.Screen name="Combo" component={Combo} />
    </Lk.Navigator>
)
}

const MainStack = () =>{

    return(
        <>
            <LkStack/>
        </>
    )
}

export default MainStack
