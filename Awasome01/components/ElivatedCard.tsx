import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElivatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElivatedCard</Text>
      <ScrollView horizontal style={styles.cointainer}>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>
        <View style = {[styles.card, styles.cardOne]}>
            <Text>Scroll</Text>
        </View>

      </ScrollView>
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
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 20,
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardOne: {
        elevation: 9,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowColor: 'green',
        shadowOpacity:0.9,
    },
})