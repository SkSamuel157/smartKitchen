import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home} from './pages/Receitas'
import { Academia } from './pages/Treino'
import { Salao } from './pages/Cabelo'
import { Games } from './pages/Games'
import { Ionicons } from '@expo/vector-icons/'


const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (<Ionicons size={35} color={"#000"} name="pizza" />)
                        }
                        return (<Ionicons size={30} color={"#000"} name="pizza-outline" />)
                    }
                }}
                />
                <Tab.Screen
                    name="Treino"
                    component={Academia}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (<Ionicons size={35} color={"#000"} name="body" />)
                            }
                            return (<Ionicons size={30} color={"#000"} name="body-outline" />)
                        }
                    }}
                />
                <Tab.Screen
                    name="Academia"
                    component={Salao}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (<Ionicons size={35} color={"#000"} name="sparkles" />)
                            }
                            return (<Ionicons size={30} color={"#000"} name="sparkles-outline" />)
                        }
                    }}
                />
                <Tab.Screen
                    name="Games"
                    component={Games}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (focused) {
                                return (<Ionicons size={35} color={"#000"} name="game-controller" />)
                            }
                            return (<Ionicons size={30} color={"#000"} name="game-controller-outline" />)
                        }
                    }}
                />
        </Tab.Navigator>
    )
}