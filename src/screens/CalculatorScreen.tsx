import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Btn} from '../components/Btn';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (numberText: string) => {
    // decimal dot exist? No accept double dot
    if (number.includes('.') && numberText === '.') {
      return;
    }
    // Not -0 o 0 start number to handle decimal dot
    if (number.includes('-0') || number.includes('0')){
      
    }

    setNumber(number + numberText);
  };

  const positiveNegative = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber('-' + number);
  };

  return (
    <View style={styles.calcContainer}>
      <Text style={styles.smallResult}>{numberBefore}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <Btn text="C" color="#9B9B9B" textColor="black" action={clean} />
        <Btn
          text="+/-"
          color="#9B9B9B"
          textColor="black"
          action={positiveNegative}
        />
        <Btn text="del" color="#9B9B9B" textColor="black" action={clean} />
        <Btn text="÷" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <Btn text="7" action={buildNumber} />
        <Btn text="8" action={buildNumber} />
        <Btn text="9" action={buildNumber} />
        <Btn text="×" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <Btn text="4" action={buildNumber} />
        <Btn text="5" action={buildNumber} />
        <Btn text="6" action={buildNumber} />
        <Btn text="−" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <Btn text="1" action={buildNumber} />
        <Btn text="2" action={buildNumber} />
        <Btn text="3" action={buildNumber} />
        <Btn text="+" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <Btn text="0" widthBtn action={buildNumber} />
        <Btn text="." action={buildNumber} />
        <Btn text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};
