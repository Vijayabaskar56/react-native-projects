/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Img from './assert/main-img.jpg'

export default function FancyCard() {
    return (
    <>
            <View style={styles.card}>
                <Text style={styles.headingText}>FancyCard</Text>
                <View style={styles.cointainer}>
                    <Image source={Img} style={styles.img} />
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Madurai Startup.</Text>
                    <Text style={styles.cardLabel}>!Chinnachoki Kulam</Text>
                    <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur unde nihil deserunt. Debitis illum hic iusto perspiciatis quidem, autem provident dignissimos similique esse delectus odit veritatis commodi voluptatum eaque!</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        backgroundColor: 'black',
        paddingBottom: 5,
    },
    card: {
        backgroundColor: 'orange',
        borderRadius: 5,
    },
    cointainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    img: {
        width: '100%',
        // objectFit: 'contain',
        height: 180,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '200',
    },
    cardLabel: {
        color: 'green',
    },
    cardDescription: {
        textAlign: 'justify',
        padding: 5,
    }
})