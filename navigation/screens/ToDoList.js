
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Keyboard } from 'react-native';
import Task from '../../components/Task';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-web';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function ToDoList() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }


    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>
            {/* Scroll View when list gets longer than page */}
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                paddingBottom: 120
            }} keyboardShouldPersistTaps='handled'>

                {/*Today's Tasks */}
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Today's Tasks</Text>
                    <View style={styles.items}>
                        {/* This is where the tasks will go*/}
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>

            </ScrollView>

            {/* Write a task section */}
            {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Ionicons name={'add-outline'} size={30} color={'black'}/>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 55,

    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        shadowRadius: 5,
        shadowOpacity: 100
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#55BCF6',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        shadowRadius: 5,
        shadowOpacity: 100
    },
    addText: {
        fontWeight: 'bold',
        fontSize: 24,

    },

});

