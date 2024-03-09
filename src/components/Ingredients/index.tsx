import { styles } from '@/components/Ingredients/styles'
import { Alert, ScrollView, View } from 'react-native'
import {  router } from "expo-router";


import Ingredient from '../Ingredient'
import { useState } from 'react'
import Selected from '../Selected/selected'

export default function Ingredients() {

  const [selected, setSelected] = useState<string[]>([])

  function handleToggleSelected(value: string){
    //condição para 'desmarcar' o valor selecionado
    if(selected.includes(value)){
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
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
    router.navigate("/recipes/")
  }
  
  return (
    <>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {Array.from({length: 50}).map((item, index) => (
          <Ingredient key={index} 
          name='Tomato' 
          image=''  
          selected={selected.includes(String(index))}
          onPress={() => handleToggleSelected(String(index))}/>
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