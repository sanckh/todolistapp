import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//screens 
import Calendar from './screens/Calendar';
import ToDoList from './screens/ToDoList';

// Screen names
const calendarName = 'Calendar';
const ToDoListName = 'To Do List';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator

                initialRouteName={Calendar}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused, color, size}) => {
                                   let iconName;
                                   let rn = route.name;

                                   if (rn === ToDoListName) {
                                       iconName = focused ? 'list' : 'list-outline'; //icons in package. Change later.
                                   } else if (rn === calendarName) {
                                       iconName = focused ? 'calendar' : 'calendar-outline'
                                   }
                                   return <Ionicons name={iconName} size={30} color={color}/>
                               },
                               tabBarActiveTintColor: '#55BCF6',
                               tabBarInactiveTintColor: 'grey',
                               tabBarShowLabel: false, //can add or remove the label
                               tabBarStyle:
                                   {
                                       padding: 10,
                                       height: 60,
                                       borderRadius: 50,
                                       borderWidth: 0,
                                       borderColor: '#000000',
                                       position: 'absolute',
                                       shadowRadius: 5,
                                       shadowOpacity: 50
                                   },
                               tabBarLabelStyle: {padding: 10},
                           })}>

                <Tab.Screen name={ToDoListName} component={ToDoList}/>
                <Tab.Screen name={calendarName} component={Calendar}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}
