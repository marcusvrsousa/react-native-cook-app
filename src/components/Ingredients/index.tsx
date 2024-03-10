import { styles } from '@/components/Ingredients/styles'
import { Alert, ScrollView, View } from 'react-native'
import {  router } from "expo-router";


import Ingredient, { IngredientsProps } from '../Ingredient'
import { useEffect, useState } from 'react'
import Selected from '../Selected/selected'
import { services } from '@/services';


export default function Ingredients() {

  const [selected, setSelected] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  function handleToggleSelected(value: string){
    //condição para 'desmarcar' o valor selecionado
    if(selected.includes(value)){
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
    console.log(selected)
  }

  //Função para limpar os itens selecionados
  function handleClear(){
    Alert.alert('Deletar', 'Deseja realmente excluir os ingredientes?', [
      {
        text: 'Sim', onPress: () => setSelected([])
      },
      {
        text: 'Não', style: 'cancel'
      }
    ])
  }

  function handleSearch(){
    router.navigate("/recipes/" + selected)
  }
  
  useEffect(() => {
    services.ingredients.findAll().then(setIngredients) 
  }, [])
  
  return (
    <>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {ingredients.map((item) => (
          <Ingredient key={item.id} 
          name={item.name} 
          image={`${services.storage.imagePath}/${item.image}`}   
          selected={selected.includes(item.id)}
          onPress={() => handleToggleSelected(item.id)}/>
        ))}
      </ScrollView>

    

      {
        selected.length > 0 && 
        <Selected 
        quantity={selected.length} 
        onClear={handleClear} 
        onSearch={handleSearch}
        />
      }
    </>
    
  )}