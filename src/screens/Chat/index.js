import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { color } from '../../utils/colors'
import { SIZES, assets, LAYERS } from '../../utils/constants'
import { FlatList } from 'react-native-gesture-handler'
import { Conversations } from '../../utils/constants'
import { ReceiverCard } from '../../components/ChatButton'

export const ChatList = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        flex: 1
      }}>

        {/* TOP BAR */}
        <View style={{
          zIndex: LAYERS.top,
          backgroundColor: color.WHITE,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: SIZES.base,
        }}>
          <Text style={{
            fontSize: SIZES.exextraLarge,
            color: color.BLACK,
          }}> Tin nhắn</Text>
          <View style={{
            flexDirection: 'row',
          }}>

            <TouchableOpacity>
              <Image
                source={assets.newchat}
                style={{ marginRight: SIZES.base }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={assets.chatnoti} />
            </TouchableOpacity>

          </View>
        </View>

        <FlatList
          data={Conversations}
          renderItem={({ item }) => <ReceiverCard data={item} />}
          keyExtractor={(item) => { item.id }}
          showsVerticalScrollIndicator={false}
        />

      </View>
    </SafeAreaView>
  )
}

export const ChatScreen = () => {
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  )
}