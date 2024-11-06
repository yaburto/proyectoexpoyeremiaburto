import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BadbunnyScreen from './Badbunny';  
import RosaliaScreen from './Rosalia';   
import CanserberoScreen from './Canserbero'; 
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Badbunny')} style={styles.imageContainer}>
        <Image 
          source={require('./assets/badbunny.png')}
          style={styles.imageLarge}
        />
        <Text style={styles.text}>Bad Bunny</Text>
      </TouchableOpacity>


      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Rosalia')} style={styles.imageContainer}>
          <Image 
            source={require('./assets/rosalia.jpg')}
            style={styles.imageSmall}
          />
          <Text style={styles.text}>Rosalía</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Canserbero')} style={styles.imageContainer}>
          <Image 
            source={require('./assets/canserbero.jpg')}  
            style={styles.imageSmall}
          />
          <Text style={styles.text}>Canserbero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Badbunny" component={BadbunnyScreen} />
        <Stack.Screen name="Rosalia" component={RosaliaScreen} />
        <Stack.Screen name="Canserbero" component={CanserberoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',  
    margin: 10,  
  },
  imageLarge: {
    width: 250,
    height: 150,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  imageSmall: {
    width: 150,
    height: 90,
    marginHorizontal: 10, 
  },
});