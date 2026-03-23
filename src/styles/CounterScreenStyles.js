import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  countContainer: {
    backgroundColor: '#E8E3FF',
    borderRadius: 20,
    padding: 40,
    marginBottom: 40,
    minWidth: 150,
    alignItems: 'center',
  },
  countText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  increaseButton: {
    backgroundColor: '#5856D6',
  },
  decreaseButton: {
    backgroundColor: '#FF2D55',
  },
  resetButton: {
    backgroundColor: '#32ADE6',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
