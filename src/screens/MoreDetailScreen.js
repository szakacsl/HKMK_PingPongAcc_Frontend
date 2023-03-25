import React from 'react'
import { StyleSheet } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'

export default function MoreDetailScreen({ navigation }) {
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>
        Recycling and Waste Management App: Create an app that provides users
        with information on local recycling programs, waste management tips, and
        disposal guidelines, making it easier for them to reduce waste and
        recycle effectively.
      </Header>
    </Background>
  )
}
