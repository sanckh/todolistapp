import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Platform, TextInput} from 'react-native';
import {Agenda} from 'react-native-calendars';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useEffect, useState} from "react";
import {addDays, format} from 'date-fns';


//Class Imports
import {Button} from "../../components/Button"
import {Modal} from "../../components/Modal"
import {DateData} from "react-native-calendars";


export default function CalendarView() {

//date and time picker State functionality
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };
    const showTimepicker = () => {
        showMode('time');
    };
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    //agenda State functionality
    // States
    const [events, setEvents] = useState({});
    const [marksDate, setMarksDate] = useState({});
    const [refreshCalender, setRefreshCalender] = useState(false);

    const onAddEventSubmit = () => {
        setRefreshCalender(true);
        let items = events;
        let mark = {};
        let eventDetails = {
            date: "2022-02-26", // Modal Value
            title: "Your Event Title" // Modal Value
        }
        if (!items[eventDetails.date]) {
            items[eventDetails.date] = [];
        }

        items[eventDetails.date].push(eventDetails);


        mark[eventDetails.date] = {
            customStyles: {
                container: {
                    backgroundColor: '#0f0',
                },
                text: {
                    color: 'white',
                    fontWeight: 'bold',
                },
            },
        };

        setEvents(items);
        setMarksDate(mark);
        setRefreshCalender(false);
        handleModal();
    }


    return (
        <View style={styles.container}>
            <Agenda
                items={events}
                 // Function
                refreshing={refreshCalender}
                renderItem={(item) => {
                    return (
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
                markingType={'custom'}
                markedDates={marksDate}
                style={styles.calendarWrapper}
                scrollEnabled={true}
                theme={{
                    // calendarBackground: '#000000'
                    todayTextColor: '#00adf5',
                }}>
            </Agenda>

            <View style={styles.absolute}
                  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={false}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <Button onPress={handleModal}/>

                <Modal isVisible={isModalVisible}>
                    <Modal.Container>
                        <Modal.Header title="New Agenda Item"/>
                        <Modal.Body>
                            <Text >Date Picker</Text>
                            <Text >Time Picker</Text>
                        </Modal.Body>
                        <Modal.Body>

                            <Button  onPress={showDatepicker} />

                            <Button onPress={showTimepicker}  />
                        </Modal.Body>
                        <View>
                            <Text style={styles.modalText}>Click to add Agenda Item</Text>
                        </View>
                        <Modal.Footer>
                            <TextInput style={{margin: 30, padding: 20}} placeholder={'Write your agenda'}/>
                            <Button onPress={onAddEventSubmit}/>
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
       // position: 'static',
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
    modalText:{
        paddingTop: 5,
        marginHorizontal: 90

    },


})