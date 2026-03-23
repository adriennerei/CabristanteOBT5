import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useThemeStore from '../store/useThemeStore';
import styles from '../styles/ThemeScreenStyles';

export default function ThemeScreen() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF' },
      ]}
    >
      <Text style={[styles.title, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        Theme Store
      </Text>

      <View
        style={[
          styles.themeCard,
          {
            backgroundColor: isDarkMode ? '#2C2C2E' : '#F2F2F7',
            borderColor: isDarkMode ? '#3A3A3C' : '#C6C6C8',
          },
        ]}
      >
        <Text
          style={[styles.themeLabel, { color: isDarkMode ? '#98989D' : '#8E8E93' }]}
        >
          Current Theme
        </Text>
        <Text
          style={[styles.themeText, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
        >
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.toggleButton,
          { backgroundColor: isDarkMode ? '#0A84FF' : '#007AFF' },
        ]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}

