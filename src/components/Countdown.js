import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/color';
import { fontSizes, spacingSizes } from '../utils/sizes';

const formatTime = (time) => time.toString().padStart(2, 0);
export const CountDown = ({ minutes = 20, isPaused, onProgress, onEnd }) => {
  const [millis, setMillis] = useState(null);
  const interval = React.useRef(null);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };
  
  useEffect(()=>{
    onProgress(millis / (minutes * 1000 * 60));
    if(millis === 0){
      onEnd();
    }
  },[millis])

  useEffect(() => {
    setMillis(minutes * 1000 * 60);
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.textPrimary,
    padding: spacingSizes.lg,
    backgroundColor: 'rgba(94,132,226,0.3)',
  },
});
