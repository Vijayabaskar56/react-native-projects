import { StyleSheet, Text, View } from 'react-native'
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
    </View>
  )
}

const styles = StyleSheet.create({})