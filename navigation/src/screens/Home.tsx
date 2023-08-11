import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type homeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: homeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>
        <Button
          title=" go to details"
          onPress={() =>
            navigation.navigate('Details', {
              productId: '85',
            })
          }
        />
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
