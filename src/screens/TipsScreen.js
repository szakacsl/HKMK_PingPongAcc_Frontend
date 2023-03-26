import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import BackButton from '../components/BackButton'
import Idea from '../components/Idea'
import YourScore from '../components/YourScore'

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
      <YourScore />
      <BackButton goBack={navigation.goBack} />
      <Idea />
      <Header>Quick Tips</Header>
      <Text style={{ fontWeight: 'bold' }}>Reduce and Reuse</Text>
      <Text>
        Lowering the amount of material you use and repurposing items can play a
        big role in reducing your home’s waste output.
      </Text>
      <Text />
      <Text style={{ fontWeight: 'bold' }}>Recycle Water</Text>
      <Text>
        By making minor changes to your plumbing system, you can even recycle
        water. Wastewater from activities like cleaning dishes, bathing, and
        washing clothes is called greywater, and it can be used for just about
        any purpose besides drinking and cleaning.
      </Text>
      <Text />
      <Text style={{ fontWeight: 'bold' }}>Buy Recycled Items</Text>
      <Text>
        Another recycling tip is buying recycled products, which help promote
        greener business models. You play your part in reducing your carbon
        emissions, while letting eco-friendly companies know their products make
        a difference.
      </Text>
      <Text />
      <Text />
      <Text />
      <Text>
        Source: https://www.webmd.com/a-to-z-guides/features/top-recycling-tips
      </Text>
    </Background>
  )
}
