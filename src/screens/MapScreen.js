import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'

const styles = {
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
}

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 46.770439,
          longitude: 23.591423,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 46.770439,
            longitude: 23.591423,
          }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
    </View>
  )
}
