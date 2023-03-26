import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function WasteClassifierScreen({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const [classifiedImage, setClassifiedImage] = useState(null)

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Waste classifier.</Header>
      {/* Showing the data of selected Single file */}
      {selectedImage != null ? (
        <>
          <Image
            source={require('../assets/picture.png')}
            style={styles.image}
          />
          <Text>File name: picture34.jpg</Text>
          <Text>Size: 1.2 mb</Text>
        </>
      ) : null}
      {classifiedImage != null ? <Text>Class: 1_polyethylene_PET</Text> : null}
      <Button mode="contained" onPress={() => setSelectedImage(1)}>
        Select Image
      </Button>
      <Button mode="contained" onPress={() => setClassifiedImage(1)}>
        Upload and Classify
      </Button>
      <View style={styles.row}>
        <Text>Whould you like more </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('MoreDetailScreen')}
        >
          <Text style={styles.link}>information?</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
})
