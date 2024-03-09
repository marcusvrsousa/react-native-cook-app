import { View } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function Recipes() {
  return (
    <View style={styles.container}>
       <View style={styles.header}> 
        <MaterialIcons
            name='arrow-back'
            size={32}
            onPress={() => router.back()}
        />
       </View>
    </View>
  )
}
