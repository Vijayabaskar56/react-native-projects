import React, {useState} from 'react';
import {Currency} from './Constants';

// package
import Snackbar from 'react-native-snackbar';

import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CurrencyButton} from './Components/CurrencyButton';

function App(): JSX.Element {
  const [ruppes, setRuppes] = useState('0');
  const [resultValue, setReultValue] = useState('');
  const [targetCurrency, settargetCurrency] = useState('');

  const buttonPress = (targetValue: currencies) => {
    if (!ruppes) {
      return Snackbar.show({
        text: 'Please Enter a value',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(ruppes);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.name} ${convertedValue.toFixed(2)}`;
      setReultValue(result);
      settargetCurrency(targetValue.name);
    } else {
      return Snackbar.show({
        text: 'Not a valid number to Convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
  };

  return (
    <View style={styles.cointainer}>
      <Text style={styles.headingText}>Currency Calculator</Text>
      <View style={styles.inputfield}>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Enter the Rupees"
          maxLength={14}
          // value={ruppes}
          placeholderTextColor="gray"
          onChangeText={setRuppes}></TextInput>
      </View>
      {resultValue && (
        <View>
          <Text selectable={true} style={styles.generatedResult}>
            <Text style={styles.resultTxt}>{resultValue}</Text>
          </Text>
        </View>
      )}
      <FlatList
        style={styles.Flatcointainer}
        numColumns={3}
        data={Currency}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Pressable
            style={[styles.btn, targetCurrency === item.name && styles.seleted]}
            onPress={() => buttonPress(item)}>
            <CurrencyButton {...item} />
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: {
    width: '100%',
    height: '100%',
  },
  headingText: {
    fontSize: 32,
    textAlign: 'center',
    color: 'green',
    paddingVertical: 10,
  },
  inputfield: {
    flex: 1,
    marginVertical: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 6,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 60,
    borderWidth: 2,
    textAlign: 'center',
  },
  Flatcointainer: {
    padding: 10,
    margin: 10,
    height: '100%',
  },
  btn: {
    backgroundColor: 'orange',
    margin: 5,
    borderRadius: 5,
  },
  seleted: {},
  resultTxt: {
    width: '100%',
    fontSize: 24,
    textAlign: 'center',
    // color: 'Green',
  },
  generatedResult: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
  },
});

export default App;
