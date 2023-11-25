import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import { color } from '../../utils/colors'
import { SIZES, assets, LAYERS } from '../../utils/constants'
import { Conversations } from '../../utils/constants'
import { ReceiverCard } from '../../components/ChatButton'
import { ChatBox, PartnerBar, BottomBar } from '../../components/ChatBox'
import { useRoute } from '@react-navigation/native'

export const ChatList = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        backgroundColor: color.WHITE,
      }}>

        {/* TOP BAR */}
        <View style={{
          zIndex: LAYERS.top,
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
        {/* CHAT HISTORY */}
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

export const ChatScreen = ({ navigation }) => {
  const route = useRoute()
  const { data } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PartnerBar avatar={data.avatar} name={data.partner} />
      <FlatList
        style={{ zIndex: LAYERS.top }}
        data={data.messages}
        renderItem={({ item }) => <ChatBox msg={item} ava={data.avatar} />}
        showsVerticalScrollIndicator={false}
      />
      <BottomBar />
    </SafeAreaView>
  )
}