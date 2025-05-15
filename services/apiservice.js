// For communicating with smart devices
export default {
  getDeviceStatus: async (ip) => {
    // In a real app, this would make an HTTP request to the device
    // For demo, return mock status
    return {
      connected: true,
      lastUpdated: new Date().toISOString(),
      power: Math.random() > 0.5,
      temperature: Math.floor(Math.random() * 10) + 20 // Random temp between 20-30
    };
  },

  sendCommand: async (ip, command, value) => {
    // In a real app, this would send a command to the device
    // For demo, return mock updated status
    return {
      connected: true,
      lastUpdated: new Date().toISOString(),
      [command]: value,
      temperature: 22 // Default temp
    };
  }
};