import React, { useState } from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CounterScreen from './src/screens/CounterScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import styles from './src/styles/AppStyles';

export default function App() {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'counter' && styles.activeTab]}
            onPress={() => setActiveTab('counter')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'counter' && styles.activeTabText,
              ]}
            >
              Counter
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tab, activeTab === 'theme' && styles.activeTab]}
            onPress={() => setActiveTab('theme')}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === 'theme' && styles.activeTabText,
              ]}
            >
              Theme
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {activeTab === 'counter' ? <CounterScreen /> : <ThemeScreen />}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

