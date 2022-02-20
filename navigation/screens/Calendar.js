import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from "react";
import {addDays, format} from 'date-fns';


//Class Imports
import {Button} from "../../components/Button"
import {Modal} from "../../components/Modal"


export default function CalendarView() {


    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return (
        <View style={styles.container}>
            <Agenda
                    style={styles.calendarWrapper}
                    scrollEnabled={true}
                    theme={{
                        // calendarBackground: '#000000'
                        todayTextColor: '#00adf5',
                    }}>
            </Agenda>

            <View style={styles.absolute}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <Button onPress={handleModal}/>
                <Modal isVisible={isModalVisible}>
                    <Modal.Container>
                        <Modal.Header title="Placeholder"/>
                        <Modal.Body>
                            <Text style={styles.text}>Placeholder Text</Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onPress={handleModal}/>
                        </Modal.Footer>
                    </Modal.Container>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    absolute: {
      position: 'absolute',
        bottom: 80,
        right: 20
    },
    container: {
        position: 'static',
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    calendarWrapper: {},
    items: {},
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
    text: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
    },

})