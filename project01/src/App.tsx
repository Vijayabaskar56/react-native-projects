import React, {useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView, Appearance} from 'react-native';
import Header from './Components/Header';
import Search from './Components/Search';
import Category from './Components/Category';
import darkmode from './styles/darkmode';
import FancyCard from './Components/Card';

const App = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
  return (
    <View>
      <SafeAreaView>
        <View
          style={
            theme == 'light' ? styles.containerMain : darkmode.containerMain
          }>
          <Header />
          <Search />
          <Category />
          <FancyCard />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    width: 'auto',
    height: '80%',
    backgroundColor: '#ffffff',
    color: '#000000',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default App;
