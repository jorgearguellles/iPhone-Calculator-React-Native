import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  textColor?: string;
  widthBtn?: boolean;
  action: (numberText: string) => void;
}

export const Btn = ({
  text,
  color = '#2D2D2D',
  textColor = 'white',
  widthBtn = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.btn,
          backgroundColor: color,
          width: widthBtn ? 180 : 80,
        }}>
        <Text style={{...styles.btnText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  btn: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
