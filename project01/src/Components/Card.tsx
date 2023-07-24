/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Img from '../assert/main-img.jpg';

export default function FancyCard() {
  function openSite(wedsiteLink: string) {
    Linking.openURL(wedsiteLink);
  }

  return (
    <>
      <View style={styles.cointainercard}>
        <Text style={styles.headingText}>Recommanded for you</Text>
        <View style={styles.card}>
          <View style={styles.cointainer}>
            <Image source={Img} style={styles.img} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Madurai Startup.</Text>
            <Text style={styles.cardLabel}>!Chinnachoki Kulam</Text>
            <Text style={styles.cardDescription} numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              consequatur unde nihil deserunt. Debitis illum hic iusto
              perspiciatis quidem, autem provident dignissimos similique esse
              delectus odit veritatis commodi voluptatum eaque!
            </Text>
          </View>
          <View style={styles.cardfooter}>
            <TouchableOpacity
              onPress={() => openSite('https://www.craiyon.com/')}>
              <Text style={styles.LinkText}>Click me !!!!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openSite(
                  'https://reactnative.dev/docs/linking?syntax=android#get-the-deep-link',
                )
              }>
              <Text style={styles.LinkText}>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cointainercard: {
    width: '100%',
    height: 'auto',
    paddingTop: 65,
    // marginTop: 0
  },
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
    height: '100%',
  },
  cardBody: {
    // height: '100%',
  },
  cointainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  img: {
    width: '100%',
    objectFit: 'contain',
    height: 180,
  },
  LinkText: {
    fontSize: 18,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 15,
    marginBottom: 15,
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
  },
  cardfooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
