import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
import {ScrollView} from "react-native-gesture-handler";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from "react";
import {addDays, format} from 'date-fns';
import {SafeAreaView} from "react-native-web";


export default function CalendarView(){

    type Item = {
        name: string;
    }
    type Post = {
        id: number;
        title: string;
        body: string;
        userId: number;
    };

        const [items, setItems] = useState();

    useEffect(() => {
        // run once

        const getData = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
            );
            const data: Post[] = await response.json();

            const mappedData = data.map((post, index) => {
                const date = addDays(new Date(), index);

                return {
                    ...post,
                    date: format(date, 'yyyy-MM-dd'),
                }
            })

            const reduced = mappedData.reduce(
                (acc: { [key: string]: Post[] }, currentItem) => {
                    const {date, ...coolItem} = currentItem;

                    acc[date] = [coolItem];

                    return acc;
                },
                {},
            )
            setItems(reduced);
        }
        getData();
    }, []);

    const renderItem = (item: Item) => {
        return (
            <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
            </View>
        );
    };
    return(
        <SafeAreaView style={styles.container}>
                        <Agenda  items={items} renderItem = {renderItem}
                                style={styles.calendarWrapper}
                                    scrollEnabled={true}
                                   theme={{
                                       // calendarBackground: '#000000', this works
                                       todayTextColor: '#00adf5',
                                   }}>
                        </Agenda>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    calendarWrapper: {

    },
    items: {
        height: 500,
    },
    dayPressColor: {
        backgroundColor: '#000000'
    },
    itemContainer: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})