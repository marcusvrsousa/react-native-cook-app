import {View, Text} from 'react-native'
import Ingredients from '@/components/Ingredients'
import { styles } from './styles'


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
