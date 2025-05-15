// For device discovery on local network
export default {
  discoverDevices: async () => {
    // In a real app, this would scan the local network
    // For demo, return mock devices
    return [
      {
        id: '1',
        name: 'Living Room Light',
        type: 'light',
        ip: '192.168.1.100',
        icon: '💡'
      },
      {
        id: '2',
        name: 'Smart Thermostat',
        type: 'thermostat',
        ip: '192.168.1.101',
        icon: '🌡️'
      }
    ];
  }
};