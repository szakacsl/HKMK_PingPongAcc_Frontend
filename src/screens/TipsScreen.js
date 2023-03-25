import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'

export default function TipsScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    fetch('https://essential-topic-381712.lm.r.appspot.com/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Tips.</Header>
      <Header>Coming soon...</Header>
      <>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>
              {data}
            </Text>
          </>
        )}
      </>
    </Background>
  )
}
