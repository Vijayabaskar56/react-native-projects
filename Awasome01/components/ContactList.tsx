import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [{
        uid: 1,
        name: 'vijayabaskar',
        status: 'arrogant piece of shit'
    },
    {
        uid: 2,
        name: 'Anna',
        status: 'Born with a geniues',
    },
    {
        uid: 3,
        name: 'Father',
        status: 'Protector',
    },
    {
        uid: 4,
        name: 'Amma',
        status: 'Nothing is greater than her',
    }]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
        style={styles.container} scrollEnabled={false}
      >
        {contacts.map(({uid,name,status}) => (
            <View key={uid} style={styles.userCard}>
                <Text  style={styles.userName}>{name}</Text>
                <Text  style={styles.userStatus}>{status}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {

    },
    container: {

    },
    userCard: {

    },
    userName: {},
    userStatus: {},
})