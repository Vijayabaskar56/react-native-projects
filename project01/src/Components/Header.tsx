import React, {useState} from 'react';
import {Text, StyleSheet, View, Appearance} from 'react-native';
import darkmode from '../styles/darkmode';

const Header = () => {
  const [theme, setTheme] = useState(Appearance.getColorScheme);
  Appearance.addChangeListener(scheme => {
    setTheme(scheme.colorScheme);
  });
  return (
    <View>
      <Text style={theme == 'light' ? styles.headerText : darkmode.headerText}>
        Servwing Cowork
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    paddingTop: 10,
    margin: 5,
  },
});

export default Header;
