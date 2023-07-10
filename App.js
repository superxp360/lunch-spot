import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Tray from './app/Tray';
import RestList from './app/RestList';


export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState(null)
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Lunch Spot</Text>
      <RestList />
      <StatusBar style="auto" />
    </View>
    <Tray setSelectRestaurant={setSelectRestaurant}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#2262fe',
    alignItems: 'center',
    justifyContent: 'start',
    
    
  },
  header: {
    color: 'white',
    fontSize: 36,

  }

  
});


  
