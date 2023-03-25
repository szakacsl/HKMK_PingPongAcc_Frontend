import React from 'react'
// import { WebViewLeaflet } from 'react-native-webview-leaflet'
import Background from '../components/Background'
import Logo from '../components/Logo'
import BackButton from '../components/BackButton'

// const webViewRef = React.useRef(null)

// const onMessageReceived = (message) => {
//   // Handle messages received from the map view
//   console.log(message)
// }

// const onMapReady = () => {
//   // Send a message to the map view when it's ready
//   webViewRef.current.postMessage('mapReady')
// }

export default function MapScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      {/* <WebViewLeaflet
        ref={webViewRef}
        source={{ html: '<div id="mapid"></div>' }}
        style={{ flex: 1 }}
        onMessageReceived={onMessageReceived}
        onMapReady={onMapReady}
        mapOptions={{
          center: [51.505, -0.09],
          zoom: 13,
        }}
        markers={[
          {
            position: [51.505, -0.09],
            icon: 'default',
            title: 'Marker 1',
            onClick: () => console.log('Marker 1 clicked'),
          },
          {
            position: [51.496, -0.1],
            icon: 'default',
            title: 'Marker 2',
            onClick: () => console.log('Marker 2 clicked'),
          },
        ]}
      /> */}
    </Background>
  )
}
