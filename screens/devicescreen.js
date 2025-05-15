import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import DeviceController from '../components/DeviceController';
import StatusIndicator from '../components/StatusIndicator';
import ApiService from '../services/ApiService';

export default function DeviceScreen({ route }) {
  const { device } = route.params;
  const [deviceState, setDeviceState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeviceStatus = async () => {
      const status = await ApiService.getDeviceStatus(device.ip);
      setDeviceState(status);
      setLoading(false);
    };
    
    fetchDeviceStatus();
    const interval = setInterval(fetchDeviceStatus, 5000); // Poll every 5 seconds
    
    return () => clearInterval(interval);
  }, [device]);

  const handleToggle = async (command, value) => {
    const newState = await ApiService.sendCommand(device.ip, command, value);
    setDeviceState(newState);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading device status...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{device.name}</Text>
      <StatusIndicator status={deviceState} />
      <DeviceController 
        deviceType={device.type} 
        state={deviceState}
        onToggle={handleToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});