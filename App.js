import { SafeAreaView, Text, StyleSheet, Pressable,View } from 'react-native'
import { Sovete } from './components/sorveteacai'

export default function App() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Studio do Sorvete</Text>

      <Sovete
        name={'SABOR DE SORVETE:'} 
        nameSovete={'Chocolate Belga'} 
        price={20}
        
        
      />
     
      <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Napolitano'} 
        price={15}
        
        
      />
 
       <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Morango'} 
        price={10}
        
        
      />
   
      <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Flocus'} 
        price={10}
        
        
      />

       <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Açaí'} 
        price={15}
        
        
      />
      
       <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Creme'} 
        price={10}
        
        
      />

       <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Nutela'} 
        price={30}
         
      />

       <Sovete
        name={'SABOR DE SORVETE:'}
        nameSovete={'Abacaxi'} 
        price={20}
         
      />
    </SafeAreaView>
  ) 
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight:'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    backgroundColor: '#4C42B7'
  
  }
})