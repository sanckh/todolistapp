import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//screens 
import CalendarView from './screens/Calendar';
import ToDoList from './screens/ToDoList';
//import PopUp from './screens/PopUp';

// Screen names
const calendarName = 'Calendar';
const ToDoListName = 'To Do List';
const popUpName = 'Pop Up Window';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={CalendarView}
                           screenOptions={({route}) => ({
                               tabBarIcon: ({focused, color, size}) => {
                                   let iconName;
                                   let rn = route.name;

                                   if (rn === ToDoListName)
                                   {
                                       iconName = focused ? 'list' : 'list-outline'; //icons in package. Change later.
                                   }
                                   else if (rn === calendarName)
                                   {
                                       iconName = focused ? 'calendar' : 'calendar-outline'
                                   }
                                   // else if (rn === popUpName)
                                   // {
                                   //     iconName = focused ? 'apps' : 'apps-outline'
                                   // }
                                   return <Ionicons name={iconName} size={30} color={color}/>
                               },
                               tabBarActiveTintColor: '#55BCF6',
                               tabBarInactiveTintColor: 'grey',
                               tabBarShowLabel: false, //can add or remove the label
                               tabBarStyle:
                                   {
                                       padding: 0,
                                       margin: 10,
                                       height: 60,
                                       borderRadius: 50,
                                       borderWidth: 0,
                                       borderColor: '#000000',
                                       position: 'absolute',
                                       shadowRadius: 1,
                                       shadowOpacity: 50

                                   },
                               tabBarLabelStyle: {padding: 10},
                           })}>
                <Tab.Screen name={calendarName} component={CalendarView}/>
                <Tab.Screen name={ToDoListName} component={ToDoList}/>
                {/*<Tab.Screen name ={popUpName} component ={PopUp}/>*/}


            </Tab.Navigator>
        </NavigationContainer>
    )
}
