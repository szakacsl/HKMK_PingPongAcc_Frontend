import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import { theme } from '../core/theme'
import BackButton from '../components/BackButton'
import DropdownComponent from '../components/DropdownComponent'
import Button from '../components/Button'
import YourScore from '../components/YourScore'

export default function DonationScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('')

  const items = [
    { label: 'Metal', value: 'item1' },
    { label: 'Food', value: 'item2' },
    { label: 'Clothing', value: 'item3' },
    { label: 'Toys', value: 'item1' },
    { label: 'Electronics', value: 'item2' },
    { label: 'Waste Oil', value: 'item3' },
    { label: 'Furniture', value: 'item3' },
  ]

  const data = [
    { label: '1 pcs', value: '1' },
    { label: '2 pcs', value: '2' },
    { label: '3 pcs', value: '3' },
    { label: '4 pcs', value: '4' },
    { label: '5 pcs', value: '5' },
    { label: '6 pcs', value: '6' },
    { label: '7 pcs', value: '7' },
    { label: '8 pcs', value: '8' },
    { label: '9 pcs', value: '9' },
    { label: '10 pcs', value: '10' },
  ]
  return (
    <Background>
      <YourScore />
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Donation</Header>

      <Text>Category</Text>
      <DropdownComponent data={items} />
      <Text>Amount</Text>
      <DropdownComponent data={data} />

      <Button mode="contained">Donate</Button>

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
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    marginTop: 0,
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
