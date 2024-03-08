import { styles } from '@/components/Ingredients/styles'
import { ScrollView } from 'react-native'
import Ingredient from '../Ingredient'
import { useState } from 'react'

export default function Ingredients() {

  const [selected, setSelected] = useState<string[]>([])

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {Array.from({length: 50}).map((item, index) => (
        <Ingredient key={index} />
      ))}
    </ScrollView>
  )
}