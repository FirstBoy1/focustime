import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 5,
  isPaused = true,
  onProgress,
  onEnd,
}) => {
  useKeepAwake();

  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const interval = useRef(null);

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    const countdown = () => {
      setMillis((time) => {
        if (time === 0) {
          clearInterval(interval.current);
          onEnd();
          return time;
        }
        const timeLeft = time - 1000;
        onProgress(timeLeft / minutesToMillis(minutes));
        return timeLeft;
      });
    };
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused, minutes, onProgress, onEnd]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)} : {formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: spacing.xxxl,
    color: colors.white,
    fontWeight: 'bold',
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
