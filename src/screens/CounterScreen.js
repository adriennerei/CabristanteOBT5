import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useCounterStore from '../store/useCounterStore';
import styles from '../styles/CounterScreenStyles';

export default function CounterScreen() {
  const count = useCounterStore((state) => state.count);
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  const reset = useCounterStore((state) => state.reset);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Store</Text>

      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.increaseButton]}
          onPress={increase}
        >
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.decreaseButton]}
          onPress={decrease}
        >
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={reset}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

