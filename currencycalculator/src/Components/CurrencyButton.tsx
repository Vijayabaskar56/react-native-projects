import {StyleSheet, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';

type SectionProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

export const CurrencyButton = (props: SectionProps) => {
  return (
    <View style={styles.tileCointainer}>
      <Text style={styles.tileIcon}>{props.flag}</Text>
      <Text style={styles.tilename}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tileCointainer: {
    width: 100,
    height: 70,
    padding: 5,
  },
  tileIcon: {
    textAlign: 'center',
  },
  tilename: {
    textAlign: 'center',
  },
});
