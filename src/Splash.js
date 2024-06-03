import { StyleSheet, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="fadeIn"
        duration={2000}
        source={{
          uri: 'https://play-lh.googleusercontent.com/WxbIQFzR06HL_nSTZdJnp5L5qVCqonweNhHW4tlpRsRnksIX_BqkP9ov_Th_SNOoz5M',
        }}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
