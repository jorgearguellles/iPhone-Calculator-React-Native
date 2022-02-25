import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  calcContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  smallResult: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  btn: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#9B9B9B',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
  },
});
