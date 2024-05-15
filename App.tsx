/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');
  const [shapeOne, setShapeOne] = useState('#ffffff');
  const [shapeTwo, setShapeTwo] = useState('#ffffff');
  const [shapeThree, setShapeThree] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    let shape1 = '#';
    let shape2 = '#';
    let shape3 = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
      shape1 += hexRange[Math.floor(Math.random() * 16)];
      shape2 += hexRange[Math.floor(Math.random() * 16)];
      shape3 += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
    setShapeOne(shape1);
    setShapeTwo(shape2);
    setShapeThree(shape3);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={styles.shapeContainer}>
          <View
            style={[
              styles.shape,
              styles.shape1,
              {backgroundColor: shapeOne},
            ]}></View>
          <View
            style={[
              styles.shape,
              styles.shape2,
              {backgroundColor: shapeTwo},
            ]}></View>
          <View
            style={[
              styles.shape,
              styles.shape3,
              {
                backgroundColor: shapeThree,
              },
            ]}></View>
        </View>
        <TouchableOpacity onPress={() => generateColor()}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase',
  },
  shape: {
    height: 80,
    width: 80,
    backgroundColor: '#000',
  },
  shapeContainer: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 30,
  },
  shape1: {
    borderRadius: 100,
  },
  shape2: {
    borderRadius: 0,
  },
  shape3: {
    borderRadius: 200,
  },
});

export default App;
