import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Tray from './app/Tray';
import RestList from './app/RestList';


export default function App() {
  const [selectRestaurant, setSelectRestaurant] = useState();
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.header}>Lunch Spot 🥙
      </Text>
      <RestList selectRestaurant={selectRestaurant}/>
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
    backgroundColor: 'mistyrose ',
    alignItems: 'center',
    justifyContent: 'start',
    
    
  },
  header: {
    color: 'darkolivegreen',
    fontSize: 36,
    fontWeight: 800,
    textAlign: 'center',

  }

  
});


  
