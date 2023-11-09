import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ChatList, ChatScreen } from '../../screens/Chat'

export const Chat = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="ChatList"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ChatList" component={ChatList} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
    )
}