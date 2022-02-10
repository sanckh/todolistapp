import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

//screens 
import Calendar from './screens/Calendar';
import ToDoList from './screens/ToDoList';

// Screen names
const calendarName = 'Calendar';
const ToDoListName = 'ToDoList';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={ToDoListName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === ToDoListName) {
                            iconName = focused ? 'home' : 'home-outline'; //icons in package. Change later.
                        } else if (rn === Calendar) {
                            iconName = focused ? 'list' : 'list-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}>
                <Tab.Screen name={ToDoListName} component={ToDoList} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}