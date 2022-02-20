import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export type ButtonProps = {
    title: string;
    onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name={'add-outline'} size={30} color={'black'}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
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
    text: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
});