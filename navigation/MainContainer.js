import React from 'react';
import {StyleSheet} from 'react-native';
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
                tabBarOptions={{
                    showLabel: false,
                    style: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: '#ffffff',
                        borderRadius: 15,
                        height: 90,
                    }
                    // activeTintColor: 'tomato',
                    // inactiveTintColor: 'black',
                    // labelStyle: {paddingBottom: 10, fontSize: 10},
                    // style: {padding: 10, height: 70},
                }}
                initialRouteName={ToDoListName}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused, color, size}) => {
                                   let iconName;
                                   let rn = route.name;

                                   if (rn === ToDoListName) {
                                       iconName = focused ? 'list' : 'list-outline'; //icons in package. Change later.
                                   } else if (rn === calendarName) {
                                       iconName = focused ? 'calendar' : 'calendar-outline'
                                   }
                                   return <Ionicons name={iconName} size={size} color={color}/>
                               },
                           })}>

                <Tab.Screen name={ToDoListName} component={ToDoList}/>
                <Tab.Screen name={calendarName} component={Calendar}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBarStyling: {
        padding: 10,
        height: 100,
        backgroundColor: 'black'
    },
    labelStyle: {
        padding: 10,
        fontSize: 10
    },
    tabStyling: {
        height: 55
    },


});