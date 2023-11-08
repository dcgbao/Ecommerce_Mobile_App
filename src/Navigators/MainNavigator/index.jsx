import { View, Text, Dimensions, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import { screenName } from '../../utils/screenName';
import { HomeScreen } from '../../screens/HomeScreen';
import { PostingScreen } from '../../screens/PostingProductScreen';
import { ManageProductScreen } from '../../screens/ManageProductsScreen';
import { UserCartScreen } from '../../screens/UserCartScreen';
import { color } from '../../utils/colors';
import { tabName } from '../../utils/tabName';
import { ProductScreen } from '../../screens/ProductScreen';
import { ProductDetailScreen } from '../../screens/ProductDetailScreen';
import { ProfileScreen } from '../../screens/ProfileScreen';
import { PaymentSuccessScreen } from '../../screens/PaymentSuccessScreen';
import { OrderConfirmationScreen } from '../../screens/OrderConfirmationScreen';
import { OrderDetailScreen } from '../../screens/OrderDetailScreen';

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
        component={PostingScreen}
        options={{ tabBarLabel: () => PostingTabLabel() }}
      />
      <Tab.Screen
        name={screenName.PRODUCT}
        component={ProductScreen}
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
        component={ProfileScreen}
        options={{
          tabBarLabel: (props) => TabLabel({
            inherit: props,
            label: tabName.ACCOUNT,
            iconName: 'user'
          })
        }}
      />

      <Tab.Screen
        name={screenName.POSTING_MANAGEMENT}
        children={() => <ManageProductScreen title={'Bài đăng'} />}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={screenName.ORDERED_MANAGEMENT}
        children={() => <ManageProductScreen title={'Đơn mua'} />}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={screenName.USER_CART}
        component={UserCartScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={screenName.PRODUCT_DETAIL}
        component={ProductDetailScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
      />


      <Tab.Screen
        name={screenName.PAYMENT_SUCCESS}
        component={PaymentSuccessScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={screenName.ORDER_CONFIRMATION}
        component={OrderConfirmationScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
      />
      <Tab.Screen
        name={screenName.ORDER_DETAIL}
        component={OrderDetailScreen}
        options={() => ({
          tabBarButton: () => null,
        })}
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
      borderRadius: '50%',
      backgroundColor: color.PRIMARY,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      bottom: '40%'
    }}>
      <Text style={{
        color: color.WHITE,
        fontSize: 40,
        textAlign: 'center',
      }}>{'+'}</Text>
    </View>
  );
};