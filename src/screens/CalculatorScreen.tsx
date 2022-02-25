import React from 'react';
import {Text, View} from 'react-native';
import {Btn} from '../components/Btn';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    number,
    numberBefore,
    clean,
    buildNumber,
    positiveNegative,
    deleteLastNumber,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    btnResult,
  } = useCalculator();
  return (
    <View style={styles.calcContainer}>
      {numberBefore !== '0' && (
        <Text style={styles.smallResult}>{numberBefore}</Text>
      )}
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
        <Btn
          text="del"
          color="#9B9B9B"
          textColor="black"
          action={deleteLastNumber}
        />
        <Btn text="÷" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <Btn text="7" action={buildNumber} />
        <Btn text="8" action={buildNumber} />
        <Btn text="9" action={buildNumber} />
        <Btn text="×" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <Btn text="4" action={buildNumber} />
        <Btn text="5" action={buildNumber} />
        <Btn text="6" action={buildNumber} />
        <Btn text="−" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <Btn text="1" action={buildNumber} />
        <Btn text="2" action={buildNumber} />
        <Btn text="3" action={buildNumber} />
        <Btn text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <Btn text="0" widthBtn action={buildNumber} />
        <Btn text="." action={buildNumber} />
        <Btn text="=" color="#FF9427" action={btnResult} />
      </View>
    </View>
  );
};
