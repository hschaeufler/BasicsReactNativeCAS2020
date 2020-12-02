import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Random({ label, value }) {
  return (
    <View>
      <Text style={styles.counter}>{value}</Text>
      <Button title={label} onPress={() => alert('Es klappt 1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    color: 'red',
    fontSize: 82,
  },
});
