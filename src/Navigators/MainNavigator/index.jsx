import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../../utils/screenName';
import  PostingScreen  from '../../screens/PostingProductScreen';

export function MainNavigator() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName={screenName.POSTING_PRODUCT_FORM}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screenName.POSTING_PRODUCT_FORM} component={PostingScreen} />
    </Stack.Navigator>
  )
}