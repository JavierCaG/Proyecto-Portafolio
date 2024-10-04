import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/home";
import Configuraciones from "./pages/configuracion/configuraciones";
import Accesibilidad from "./pages/configuracion/opciones/accecibilidad";
import AdministrarCuenta from "./pages/configuracion/opciones/administrarCuenta";
import Idiomas from "./pages/configuracion/opciones/idiomas";
import Privacidad from "./pages/configuracion/opciones/privacidad";
import Seguridad from "./pages/configuracion/opciones/seguridad";
import Temas from "./pages/configuracion/opciones/temas";
import Testigos from "./pages/testigos/testigos";
import Beneficiarios from "./pages/configuracion/beneficiarios/beneficiarios";
import Historial from "./pages/historial/historial";

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initalRouteName="Home" >
      <Stack.Screen name="Home" component={Home}/>

      {/* configuracion */}
      <Stack.Screen name="Configuraciones" component={Configuraciones}/>
      <Stack.Screen name="Accesibilidad" component={Accesibilidad}/>
      <Stack.Screen name="AdministrarCuenta" component={AdministrarCuenta}/>
      <Stack.Screen name="Idiomas" component={Idiomas}/>
      <Stack.Screen name="Privacidad" component={Privacidad}/>
      <Stack.Screen name="Seguridad" component={Seguridad}/>
      <Stack.Screen name="Temas" component={Temas}/>

      {/* testigos */}
      <Stack.Screen name="Testigos" component={Testigos}/>

      {/* beneficiarios */}
      <Stack.Screen name="Beneficiarios" component={Beneficiarios}/>

      {/* historial */}
      <Stack.Screen name="Historial" component={Historial}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}