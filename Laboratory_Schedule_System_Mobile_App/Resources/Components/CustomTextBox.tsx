/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, Animated, Easing} from 'react-native';
import React, { useRef, useState } from 'react';


interface  textPlaceholder {
  boxName :string;
  duration?:number;
  activeBoxNameColor?: string;
}
const CustomTextBox = ({boxName, duration = 200, activeBoxNameColor = 'black'}:textPlaceholder ) => {

  const transY = useRef(new Animated.Value(0));
  const borderWidth = useRef(new Animated.Value(1));
  const [text, setText] = useState<string>('');


  const handleFocus = () =>{
    animateTransform(-26);
    animateBorderWidth(2);
  };
  const handleBlue = () =>{
    if (text) {return;}
    animateTransform(0);
    animateBorderWidth(1);
  };
  const animateTransform = (toValue: number) =>
  {
    Animated.timing(transY.current, {
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  const animateBorderWidth = (toValue: number) =>
  {
    Animated.timing(borderWidth.current, {
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };
  const borderColor = borderWidth.current.interpolate(
  {
    inputRange: [1, 2],
    outputRange:['black', activeBoxNameColor],
    extrapolate: 'clamp',
  });
  const boxNameColor = borderWidth.current.interpolate(
  {
    inputRange: [1, 2],
    outputRange:['black', activeBoxNameColor],
    extrapolate: 'clamp',
  });

  const handleChangeText = (value: string) =>{
    setText(value);
  };
  return (
    <Animated.View style ={[styles.viewBox, {borderWidth: borderWidth.current, borderColor}]}>
      <Animated.View style={[styles.textLabel, { transform: [ { translateY: transY.current }]}]} >
        <Animated.Text style={{color:boxNameColor}}>{boxName}</Animated.Text>
      </Animated.View>
      <TextInput onFocus={handleFocus} onBlur={handleBlue} value={text} onChangeText={handleChangeText}/>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  viewBox: {
    width:240,
    borderWidth:1,
    borderRadius:5,
    paddingHorizontal:15,
    justifyContent:'center',
  },
  textLabel:
  {
    position: 'absolute',
    it:'center',
    backgroundColor:'white',
    marginLeft:15,
    paddingHorizontal:5,
  },
});
export default CustomTextBox;
