import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import DeviceList from '../components/DeviceList';
import NetworkService from '../services/NetworkService';

export default function HomeScreen({ navigation }) {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const discoverDevices = async () => {
      const foundDevices = await NetworkService.discoverDevices();
      setDevices(foundDevices);
      setLoading(false);
    };
    
    discoverDevices();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Discovering devices...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={devices}
        renderItem={({ item }) => (
          <DeviceList 
            device={item} 
            onPress={() => navigation.navigate('Device', { device: item })}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}