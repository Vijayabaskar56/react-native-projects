import React, {useState} from 'react';
import {Text, StyleSheet, View, Appearance} from 'react-native';
import darkmode from '../styles/darkmode';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Search = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });

  const search = <Icon name="search-web" size={20} color="#ffffff" />;
  return (
    <View>
      <Text
        style={
          theme == 'light' ? styles.searchTextOne : darkmode.searchTextOne
        }>
        Welcome,
      </Text>
      <Text
        style={
          theme == 'light' ? styles.searchTextTwo : darkmode.searchTextTwo
        }>
        Where Today You'll Work?
      </Text>
      <View>
        <Text style={theme == 'light' ? styles.searchBar : darkmode.searchBar}>
          {search} Find Cowork
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchTextOne: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 20,
    color: '#000000',
    margin: 5,
  },
  searchTextTwo: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 20,
    color: '#000000',
    margin: 5,
  },
  searchBar: {
    padding: 7,
    marginHorizontal: 20,
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'gray',
    color: '#000000',
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});

export default Search;
