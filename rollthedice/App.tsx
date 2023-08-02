import React, {useState} from 'react';
import {
  Text,
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from './assert/One.jpeg';
import DiceTwo from './assert/Two.jpeg';
import DiceThree from './assert/Three.jpeg';
import DiceFour from './assert/Four.jpeg';
import DiceFive from './assert/Five.jpeg';
import DiceSix from './assert/Six.jpeg';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.imgCointainer} source={imageUrl}></Image>
    </View>
  );
};

function App(): JSX.Element {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne);

  const rollthedice = () => {
    let diceno = Math.floor(Math.random() * 6) + 1;

    switch (diceno) {
      case 1:
        setDiceImg(DiceOne);
        break;
      case 2:
        setDiceImg(DiceTwo);
        break;
      case 3:
        setDiceImg(DiceThree);
        break;
      case 4:
        setDiceImg(DiceFour);
        break;
      case 5:
        setDiceImg(DiceFive);
        break;
      case 6:
        setDiceImg(DiceSix);
        break;
      default:
        setDiceImg(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Dice imageUrl={diceImg} />
      <Pressable style={styles.btn} onPress={rollthedice}>
        <Text style={styles.text}>Roll the Dice</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  imgCointainer: {
    width: 200,
    height: 200,
  },
  btn: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    margin: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  text: {
    color: '#000000',
  },
});

export default App;
