import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function DeviceController({ deviceType, state, onToggle }) {
  const renderController = () => {
    switch (deviceType) {
      case 'light':
        return (
          <View style={styles.control}>
            <Text>Power</Text>
            <Switch
              value={state.power}
              onValueChange={(value) => onToggle('power', value)}
            />
          </View>
        );
      case 'thermostat':
        return (
          <View style={styles.control}>
            <Text>Temperature: {state.temperature}°C</Text>
            {/* Add slider for temperature control */}
          </View>
        );
      default:
        return <Text>No controls available</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderController()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  control: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  }
});