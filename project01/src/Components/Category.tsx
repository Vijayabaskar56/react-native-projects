import React, {useState} from 'react';
import {Text, StyleSheet, View, Appearance} from 'react-native';
import darkmode from '../styles/darkmode';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Category = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const coffee = <Icon name="coffee" size={30} color="#ffffff" />;
  const office = <Icon name="office-building" size={30} color="#ffffff" />;
  const space = <Icon name="home-automation" size={30} color="#ffffff" />;
  const seeall = <Icon name="border-all" size={30} color="#ffffff" />;

  return (
    <View>
      <Text
        style={theme == 'light' ? styles.categorText : darkmode.categorText}>
        Category
      </Text>
      <View style={theme == 'light' ? styles.Cointainer : darkmode.Cointainer}>
        <View
          style={
            theme == 'light' ? styles.boxCointainer : darkmode.boxCointainer
          }>
          <View style={theme == 'light' ? styles.Box : darkmode.Box}>
            <View style={[styles.items, styles.itemOne]}>{coffee}</View>
          </View>
          <View style={theme == 'light' ? styles.Box : darkmode.Box}>
            <View style={[styles.items, styles.itemTwo]}>{office}</View>
          </View>
          <View style={theme == 'light' ? styles.Box : darkmode.Box}>
            <View style={[styles.items, styles.itemThree]}>{space}</View>
          </View>
          <View style={theme == 'light' ? styles.Box : darkmode.Box}>
            <View style={[styles.items, styles.itemFour]}>{seeall}</View>
          </View>
        </View>
        <View
          style={
            theme == 'light'
              ? styles.boxCointainerText
              : darkmode.boxCointainerText
          }>
          <Text style={theme == 'light' ? styles.boxText : darkmode.boxText}>
            Cafe
          </Text>
          <Text style={theme == 'light' ? styles.boxText : darkmode.boxText}>
            Cafe
          </Text>
          <Text style={theme == 'light' ? styles.boxText : darkmode.boxText}>
            Cafe
          </Text>
          <Text style={theme == 'light' ? styles.boxText : darkmode.boxText}>
            Cafe
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categorText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 20,
    color: '#000000',
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
    alignItems: 'center',
    justifyContent: 'center',
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
    color: 'black',
  },
  itemOne: {
    backgroundColor: '#52cbf8',
  },
  itemTwo: {
    backgroundColor: '#96be57',
  },
  itemThree: {
    backgroundColor: '#ff8987',
  },
  itemFour: {
    backgroundColor: '#a885ff',
  },
});

export default Category;
