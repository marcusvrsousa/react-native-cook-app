import { FlatList, ScrollView, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'

import { Recipe } from '@/components/Recipe'
import { services } from '@/services'
import Ingredient from '@/components/Ingredient'

import { styles } from './styles'

export default function Recipes() {

  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])

  const params = useLocalSearchParams<{ingredientsIds: string}>()
  const ingredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredients.findByIds(ingredientsIds).then(setIngredients)
  }, [])

  useEffect(() => {
    services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes)
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
      <ScrollView contentContainerStyle={styles.container} horizontal>
       
      {ingredients.map((item) => (
          <Ingredient  
          key={item.id} 
          name={item.name} 
          image={`${services.storage.imagePath}/${item.image}`} 
          />
        ))}
       </ScrollView>

      <FlatList
         data={recipes}
         keyExtractor={(item) => (item.id)}
         renderItem={({item}) => <Recipe recipe={item} onPress={() => router.navigate("/recipe/" + item.id)}/>}

         style={styles.recipes}
         contentContainerStyle={styles.recipesContent}
         showsVerticalScrollIndicator={false}
         columnWrapperStyle={{gap: 16}}
         numColumns={2}
      />
    </View>
  )
}
