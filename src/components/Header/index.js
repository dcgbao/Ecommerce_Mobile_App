import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { color } from "../../utils/colors";
import Icon from "react-native-vector-icons/Entypo"

const Header = (props) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles['back-icon']} onPress={props.action}>
            <Icon name="arrow-long-left" size={25} color={color.PRIMARY}/>
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 16,
        paddingBottom: 8,
        borderBottomWidth: 0.8,
        borderBlockColor: "#F0F2F1"
    },

    'back-icon': {
        position: "absolute",
        left: 30,
        top: 14,
        zIndex: 10
    },

    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default Header