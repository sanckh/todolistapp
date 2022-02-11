import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {ScrollView} from "react-native-gesture-handler";


export default function CalendarView(){
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 120
            }} keyboardShouldPersistTaps='handled'>
                {/*Calendar */}
                <View style={styles.calendarWrapper}>
                    <View style={styles.items}>
                        <Calendar>

                        </Calendar>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    calendarWrapper: {

    },



})