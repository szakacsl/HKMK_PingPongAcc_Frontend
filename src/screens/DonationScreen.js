import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import { theme } from '../core/theme'
import BackButton from '../components/BackButton'
import { Picker } from '@react-native-picker/picker'

export default function DonationScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Donation</Header>

      

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
