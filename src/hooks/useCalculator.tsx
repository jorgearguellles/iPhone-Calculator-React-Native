import {useRef, useState} from 'react';

enum Operators {
  divide,
  add,
  subtract,
  multiply,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0');
  const lastOperationRef = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setNumberBefore('0');
  };

  const buildNumber = (numberText: string) => {
    // decimal dot exist? No accept double dot
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.includes('-0') || number.includes('0')) {
      // Decimal dot
      if (numberText === '.') {
        setNumber(number + numberText);
        // Evaluate if is another zero, and there is a decimal dot
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // Evaluate if is different to zero and don't have decimal dot
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // Avoid 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    number.includes('-')
      ? setNumber(number.replace('-', ''))
      : setNumber('-' + number);
  };

  const deleteLastNumber = () => {
    let negative = '';
    let numberTemp = number;
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumbWithLastNumber = () => {
    if (number.endsWith('.')) {
      setNumberBefore(number.slice(0, -1));
    } else {
      setNumberBefore(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.divide;
  };
  const btnMultiply = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.multiply;
  };
  const btnSubtract = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.subtract;
  };
  const btnAdd = () => {
    changeNumbWithLastNumber();
    lastOperationRef.current = Operators.add;
  };

  const btnResult = () => {
    const numberFirst = Number(number);
    const numberSecond = Number(numberBefore);

    switch (lastOperationRef.current) {
      case Operators.add:
        setNumber(`${numberFirst + numberSecond}`);
        break;
      case Operators.subtract:
        setNumber(`${numberSecond - numberFirst}`);
        break;
      case Operators.multiply:
        setNumber(`${numberFirst * numberSecond}`);
        break;
      case Operators.divide:
        setNumber(`${numberSecond / numberFirst}`);
        break;
    }
    setNumberBefore('0');
  };

  return {
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
  };
};
