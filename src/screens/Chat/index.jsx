import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { color } from '../../utils/colors'
import { SIZES, SHADOWS, assets, LAYERS } from '../../utils/constants'
import { FlatList } from 'react-native-gesture-handler'
import { Conversations } from '../../utils/constants'
import { ReceiverCard } from '../../components/ChatButton'
import { ChatBox, PartnerBar, BottomBar } from '../../components/ChatBox'

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
    const sample = Conversations[0]

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PartnerBar avatar={sample.avatar} name={sample.partner} />
            <FlatList
                style={{ zIndex: LAYERS.top }}
                data={sample.messages}
                renderItem={({ item }) => <ChatBox msg={item} ava={sample.avatar} />}
                showsVerticalScrollIndicator={false}
            />
            <BottomBar />
        </SafeAreaView>
    )
}