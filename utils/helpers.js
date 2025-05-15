export const formatDeviceName = (name) => {
  return name.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

export const getDeviceIcon = (type) => {
  const icons = {
    light: '💡',
    thermostat: '🌡️',
    plug: '🔌',
    camera: '📷'
  };
  return icons[type] || '🏠';
};