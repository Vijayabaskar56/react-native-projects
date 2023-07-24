import { Text, StyleSheet, View, VirtualizedList } from 'react-native';
import React, { Component } from 'react';

export default class FlatCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
        <View style={styles.cointainer}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>RED</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>GREEN</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>BLUE</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    paddingBottom: 5,
  },
  cointainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'orange',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: 'auto',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
