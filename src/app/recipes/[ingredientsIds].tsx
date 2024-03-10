import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { Recipe } from '@/components/Recipe'
import { useEffect, useState } from 'react'
import { services } from '@/services'
import Ingredients from '@/components/Ingredients'

export default function Recipes() {

  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  const params = useLocalSearchParams<{ingredientsIds: string}>()
  const ingredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <MaterialIcons
            name='arrow-back'
            size={32}
            onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes</Text>
      </View>

      <Ingredients ingredientsProp={ingredients}/>
       
      <FlatList
         data={["1"]}
         keyExtractor={(item) => item}
         renderItem={() => <Recipe recipe={{name: "omelete", minutes:10, image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpanelaboa.com%2Freceita-de-omelete-recheado-uma-delicia-pratica-e-saborosa%2F&psig=AOvVaw2kgsU2mTLYTHm2jNnbBv9N&ust=1710124910355000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDIvPLV6IQDFQAAAAAdAAAAABAE"}}></Recipe>}
      />
    </View>
  )
}
