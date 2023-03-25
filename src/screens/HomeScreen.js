import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import LogOut from '../components/LogOut'
import Header from '../components/Header'
import Button from '../components/Button'
import { theme } from '../core/theme'

export default function HomeScreen({ navigation }) {
  return (
    <Background>
      <LogOut
        goBack={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      />
      <Logo />
      <Header>Welcome!</Header>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RecycleScreen')}
      >
        Recycle
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('DonationScreen')}
      >
        Donation
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
})
