import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function WasteClassifierScreen({ navigation }) {
  const [singleFile, setSingleFile] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const chooseImage = async () => {
    // const options = {
    //   title: 'Select Avatar',
    //   storageOptions: {
    //     skipBackup: true,
    //     path: 'images',
    //   },
    // }

    try {
      const image = await launchImageLibrary()
    } catch (e) {
      console.log(e)
    }
  }

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image)
    })
  }

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile
      const data = new FormData()
      data.append('name', 'Image Upload')
      data.append('file_attachment', fileToUpload)
      // Please change file upload URL
      const res = await fetch('http://localhost/upload.php', {
        method: 'post',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data; ',
        },
      })
      const responseJson = await res.json()
      if (responseJson.status === 1) {
        alert('Upload Successful')
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first')
    }
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Waste classifier.</Header>
      {/* Showing the data of selected Single file */}
      {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}
      <Button mode="contained" onPress={chooseImage}>
        Select Image
      </Button>
      <Button mode="contained" onPress={uploadImage}>
        Upload Image
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
})
