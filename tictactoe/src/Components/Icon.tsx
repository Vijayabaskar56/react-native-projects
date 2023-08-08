import React from 'react';
import type {PropsWithChildren} from 'react';

// Package's
import Icons from 'react-native-vector-icons/FontAwesome';

// type validation
type Iconsprops = PropsWithChildren<{
  name: string;
}>;

const Icon = ({name}: Iconsprops) => {
  console.log('Icon component called with name:', name);
  switch (name) {
    case 'Circle':
      return <Icons name="circle-thin" size={38} color="#F7CD2E" />;
      break;
    case 'Cross':
      return <Icons name="times" size={38} color="#38CC77" />;
      break;
    default:
      return <Icons name="pencil" size={38} color="#0D0D0D" />;
      break;
  }
};

export default Icon;
