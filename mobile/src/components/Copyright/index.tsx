import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View>
        <text style={styles.text}>
        Feito com ♥ by Pants
        </text>

    </View>
  );
}