import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Img from './assert/main-img.jpg'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElivated]}>
            <Image source={Img} style={styles.img} />
      <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Madurai Startup.</Text>
            <Text style={styles.cardLabel}>!Chinnachoki Kulam</Text>
            <Text  style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur unde nihil deserunt. Debitis illum hic iusto perspiciatis quidem, autem provident dignissimos similique esse delectus odit veritatis commodi voluptatum eaque!</Text>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        backgroundColor: 'black',
        paddingBottom: 5,
    },
    cointainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    card: {
        width: 350,
        height:360,
        borderRadius: 8,
        // padding: 10,
        marginVertical: 12,
        marginHorizontal: 10,
    },
    cardElivated: {
        backgroundColor: 'violet',
        elevation: 5,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: 'white'
    },
    img: {
        width: '100%',
        // objectFit: 'contain',
        height: 180,
        marginBottom: 10,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6, 
 
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '200',
        color: 'black',
    },
    cardLabel: {
        color: 'green',
    },
    cardDescription: {
        textAlign: 'justify',
        padding: 5,
        color: 'black',

    }
})