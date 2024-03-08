import { styles } from '@/components/Ingredient/styles'
import React from 'react'
import { Image, Pressable, PressableProps, Text } from 'react-native'

export default function Ingredient() {
  return (
    <Pressable style={styles.container}>
        <Image style={styles.image}/>
        <Text style={styles.title}>Maçã</Text>
    </Pressable>
  )
}
