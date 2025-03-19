import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

export default function App() {
  const handleContact = () => {
    Linking.openURL('https://www.linkedin.com/in/vanessa-lins-/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://avatars.githubusercontent.com/u/69607861?v=4&size=128' }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Vanessa Lins</Text>
          <Text style={styles.role}>💻 Desenvolvedora Fullstack</Text>
          <Text style={styles.bio}>Comunicativa, dedicada e apaixonada por criar soluções que fazem a diferença. Sempre aprendendo e evoluindo!</Text>
          <Text style={styles.contact}>📍 Recife, PE</Text>
          <Text style={styles.contact}>📧 vanessalins356@gmail.com</Text>
          <Text style={styles.contact}>📱 (81) 98855-0971</Text>

          <TouchableOpacity style={styles.button} onPress={handleContact}>
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    padding: 20,
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#FFDD00',
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
  },
  imageContainer: {
    marginRight: 20,
    backgroundColor: '#FFDD00',
    padding: 5,
  },
  image: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    maxWidth: '60%',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFDD00',
  },
  role: {
    fontSize: 18,
    color: '#FFDD00',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#D4D4D4',
    marginBottom: 10,
  },
  contact: {
    fontSize: 14,
    color: '#BFBFBF',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#FFDD00',
    padding: 10,
    borderRadius: 5,
    marginTop: 12,
  },
  buttonText: {
    color: '#0D0D0D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
