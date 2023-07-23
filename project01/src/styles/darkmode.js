import React from "react";
import { StyleSheet } from "react-native";

const darkmode = StyleSheet.create({
    containerMain: {
        width: 'auto',
        height: '80%',
        backgroundColor: '#000000',
        color: '#ffffff',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 10,
        margin: 5,
    },
    searchTextOne: {
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 20,
        color: '#ffffff',
        margin: 5,
    },
    searchTextTwo: {
        fontSize: 24,
        fontWeight: '600',
        paddingHorizontal: 20,
        color: '#ffffff',
        margin: 5,
    },
    searchBar: {
        padding: 7,
        marginHorizontal: 20,
        width: '80%',
        marginVertical: 10,
        backgroundColor: 'gray',
        color: '#ffffff',
        paddingHorizontal: 10,
        borderRadius: 50,
    },
    categorText: {
        fontSize: 16,
        fontWeight: '400',
        paddingHorizontal: 20,
        color: '#ffffff',
        margin: 5,
    },
    Cointainer: {
        width: '100%',
        height: 100,
    },
    boxCointainer: {
        width: '80%',
        height: '100%',
        // backgroundColor: 'white',
        marginHorizontal: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    Box: {
        marginBottom: 5,
    },
    items: {
        width: 50,
        height: 50,
        borderRadius: 20,

    },
    boxCointainerText: {
        width: '80%',
        height: '20%',
        marginHorizontal: 20,
        paddingTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    boxText: {
        fontSize: 16,
        color: '#ffffff',
    },
})

export default darkmode;