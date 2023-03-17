import { StyleSheet, View } from 'react-native';

export const ProgressBar = ({ currentTime, duration }) => {
  const progress = currentTime / duration;
  
  return (
    <View style={styles.wrapper}>
      <View style={[styles.bar, { width: progress * 100 + '%' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    marginHorizontal: 16,
  },
  bar: {
    height: '100%',
    backgroundColor: '#ff2e2e',
    borderRadius: 4,
  },
});