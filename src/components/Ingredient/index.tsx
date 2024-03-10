import { styles } from '@/components/Ingredient/styles'
import React from 'react'
import { Image, Pressable, PressableProps, Text } from 'react-native'

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean 
}

//Ingrediet recebe essas propriedades 
export default function Ingredient({name, image, selected = false, ...rest}: IngredientsProps & PressableProps) {
  return (
    <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
        <Image source={{uri:image}} style={styles.image}/>
        <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}
