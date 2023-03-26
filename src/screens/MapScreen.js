import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { View, Text } from 'react-native'
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
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([1, 1])

  const coordinates = [
    [46.775439, 23.594423],
    [46.770439, 23.580423],
    [46.770439, 23.598423],
    [46.770439, 23.592423],
  ]

  const markers = () => {
    return coordinates.map((marker) => (
      <Marker
        coordinate={{ latitude: marker[0], longitude: marker[1] }}
        title="Marker Title"
        description="Marker Description"
      />
    ))
  }

  useEffect(() => {
    fetch('https://essential-topic-381712.lm.r.appspot.com/coordinate')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    // <>
    //   <Text>{data}</Text>
    //   <Text>{data}</Text>
    //   <Text>{data}</Text>
    //   <Text>{data}</Text>
    //   <Text>{data}</Text>
    //   <Text>{data}</Text>
    // </>
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
        {/* <Marker
          coordinate={{
            latitude: 46.770439,
            longitude: 23.591423,
          }}
          title="Marker Title"
          description="Marker Description"
        />
        <Marker
          coordinate={{
            latitude: 46.770439,
            longitude: 23.791443,
          }}
          title="Marker Title"
          description="Marker Description"
        /> */}
        {isLoading ? null : (
          <>
            <>{markers()}</>
          </>
        )}
      </MapView>
    </View>
  )
}
