import React, { useState } from 'react'
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function YourScore({ props }) {
  const [value, setValue] = useState(0)
  return (
    <TouchableOpacity
      onPress={() => setValue(value + 1)}
      style={styles.container}
    >
      <Text>YourScore: {value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})
