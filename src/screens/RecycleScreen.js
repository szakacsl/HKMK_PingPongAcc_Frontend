import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import YourScore from '../components/YourScore'

export default function RecycleScreen({ navigation }) {
  return (
    <Background>
      <YourScore />
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Recycle</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('WasteClassifierScreen')}
      >
        Waste Classifier
      </Button>
      <Text>Recycling symbol classifier</Text>
      <Text />
      <Button mode="contained" onPress={() => navigation.navigate('MapScreen')}>
        Map
      </Button>
      <Text>Map of the nearest garbage collection points</Text>
      <Text />
      <Button
        mode="contained"
        onPress={() => navigation.navigate('TipsScreen')}
      >
        Quick Tips
      </Button>
      <Text>Learn new ways to be sustainable</Text>
      <Text />
      <Text />
      <Text />
      <Text />
      <Text />
  
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
})
