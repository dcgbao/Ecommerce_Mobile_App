import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../../utils/screenName';
import { LoginScreen } from '../../screens/LoginScreen';
import { RegisterScreen } from '../../screens/RegisterScreen';
import { ForgotPasswordScreen } from '../../screens/ForgotPasswordScreen';

export function AuthenticationNavigator() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName={screenName.REGISTER}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screenName.LOGIN} component={LoginScreen} />
      <Stack.Screen name={screenName.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={screenName.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
}