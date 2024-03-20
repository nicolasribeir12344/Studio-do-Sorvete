import { View, Text, StyleSheet } from 'react-native'

export function Sovete({ name, nameSovete, price }) {
  return (
    <View style={styles.container}> 
      <Text style={[styles.name, styles.bold]}>{name}</Text>
      <Text style={[styles.name, styles.nameSovete]}>{nameSovete}</Text> 
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor:'#4C42B7'
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
   
  },

  nameSovete: {
    color: '#000',
  },

  price: {
    fontSize: 13,
    color: '#0000ff',

  }
})