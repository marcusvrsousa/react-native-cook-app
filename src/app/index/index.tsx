import {View, Text} from 'react-native'
import { styles } from './styles'
import Ingredients from '@/components/Ingredients'
import { useEffect, useState } from 'react'
import { services } from '@/services'


export default function index() {

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Escolha{"\n"}
            <Text style={styles.subtitle}>os ingredientes</Text>
        </Text>
        <Text style={styles.message}>Descubra receitas baseadas nos ingredientes escolhidos</Text>
        <Ingredients />
    </View>
  )
}
