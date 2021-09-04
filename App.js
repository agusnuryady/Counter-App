/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    if (counter < 99) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <SafeAreaView style={styles.fx1}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ImageBackground
        source={require('./Assets/Images/bg-image.png')}
        style={styles.fx1}>
        <TouchableHighlight
          underlayColor="rgba(255,255,255,0.1)"
          delayLongPress={2000}
          onPress={() => handleCounter()}>
          <View style={styles.itemContent}>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{counter}</Text>
            </View>
            <Text style={styles.infoText}>
              {'Press to count \n& \nLong press to reset'}
            </Text>
          </View>
        </TouchableHighlight>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fx1: {
    flex: 1,
  },
  itemContent: {
    height: '100%',
    alignItems: 'center',
  },
  counterContainer: {
    position: 'absolute',
    top: 100,
    borderWidth: 4,
    borderColor: 'rgba(32, 81, 116, 1)',
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').width * 0.7,
    borderRadius: (Dimensions.get('screen').width * 0.7) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  counterText: {
    color: '#05668F',
    fontSize: 96,
  },
  infoText: {
    color: '#B9B9B9',
    textAlign: 'center',
    position: 'absolute',
    bottom: 45,
  },
});

export default App;
