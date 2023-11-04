import { View, Text, Dimensions, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import { screenName } from '../../utils/screenName';
import { HomeScreen } from '../../screens/HomeScreen';
import { color } from '../../utils/colors';
import { tabName } from '../../utils/tabName';

export function MainNavigator() {
  const Tab = createBottomTabNavigator()
  const defaultAndroidBottomBarHeight =
    Dimensions.get('screen').height
    - Dimensions.get('window').height
    - (StatusBar.currentHeight || 24);

  return (
    <Tab.Navigator
      initialRouteName={screenName.HOME}
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {
          display: 'none'
        },
        tabBarLabelStyle: {
          display: 'none'
        },
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.SILVER,
        tabBarStyle: {
          height: 100,
          marginBottom: defaultAndroidBottomBarHeight,
        },
      }}
    >
      <Tab.Screen
        name={screenName.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => TabLabel({
            inherit: props,
            label: tabName.HOME,
            iconName: screenName.HOME
          })
        }}
      />
      <Tab.Screen
        name={screenName.MESSAGE}
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => TabLabel({
            inherit: props,
            label: tabName.MESSAGE,
            iconName: screenName.MESSAGE
          })
        }}
      />
      <Tab.Screen
        name={screenName.POSTING_PRODUCT_FORM}
        component={HomeScreen}
        options={{ tabBarLabel: () => PostingTabLabel() }}
      />
      <Tab.Screen
        name={screenName.PRODUCT}
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => TabLabel({
            inherit: props,
            label: tabName.PRODUCT,
            iconName: 'text-document-inverted'
          })
        }}
      />
      <Tab.Screen
        name={screenName.ACCOUNT}
        component={HomeScreen}
        options={{
          tabBarLabel: (props) => TabLabel({
            inherit: props,
            label: tabName.ACCOUNT,
            iconName: 'user'
          })
        }}
      />
    </Tab.Navigator>
  )
}

const TabLabel = ({ inherit, label, iconName }) => {
  return (
    <View style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Icon name={iconName} color={inherit.color} size={28} />

      <Text style={{
        marginTop: 8,
        color: inherit.color,
        fontSize: 10,
      }}
      >{label.toUpperCase()}
      </Text>
    </View>
  );
};

const PostingTabLabel = () => {
  return (
    <View style={{
      height: 74,
      width: 74,
      borderRadius: 74 / 2,
      marginBottom: (100 - 74) / 2,
      backgroundColor: color.PRIMARY,
    }}>
      <Text style={{
        color: color.WHITE,
        fontSize: 48,
        textAlign: 'center',
        lineHeight: 74,
      }}>{'+'}</Text>
    </View>
  );
};