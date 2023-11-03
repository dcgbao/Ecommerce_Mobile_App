import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dimensions, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { color } from '../../utils/colors';
import { screenName } from '../../utils/screenName';
import { AuthenticationNavigator } from '../AuthenticationNavigator';

export function AppNavigator() {
  const Stack = createNativeStackNavigator()
  const insets = useSafeAreaInsets()
  const styles = {
    container: {
      width: "100%",
      height: Dimensions.get("screen").height,
      backgroundColor: color.BACKGROUND,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={screenName.AUTHENTICATION_NAVIGATOR}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={screenName.AUTHENTICATION_NAVIGATOR} component={AuthenticationNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}