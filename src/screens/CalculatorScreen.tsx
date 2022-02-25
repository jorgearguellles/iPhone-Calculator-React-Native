import React from 'react';
import {Text, View} from 'react-native';
import {Btn} from '../components/Btn';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
      <Text style={styles.smallResult}>1,500.00</Text>
      <Text style={styles.result}>$ 1,500.00</Text>
      <View style={styles.row}>
        <Btn text="C" color="#9B9B9B" textColor="black" />
        <Btn text="+/-" color="#9B9B9B" textColor="black" />
        <Btn text="del" color="#9B9B9B" textColor="black" />
        <Btn text="÷" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Btn text="7" />
        <Btn text="8" />
        <Btn text="9" />
        <Btn text="×" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Btn text="4" />
        <Btn text="5" />
        <Btn text="6" />
        <Btn text="−" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Btn text="1" />
        <Btn text="2" />
        <Btn text="3" />
        <Btn text="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <Btn text="0" widthBtn />
        <Btn text="." />
        <Btn text="=" color="#FF9427" />
      </View>
    </View>
  );
};
