import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Onboarding from "./screens/Onboarding";

const Stack = createNativeStackNavigator();

function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component ={Onboarding}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default App;