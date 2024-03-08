import { Slot } from 'expo-router'
import { useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium
} from '@expo-google-fonts/poppins'

export default function _layout() {

    const [fontsLoaded] =useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium
    })

    if(!fontsLoaded){
        return 
    }
    //se a fonte não for carregada retorna null
  return fontsLoaded ? <Slot/> : null
  
}
