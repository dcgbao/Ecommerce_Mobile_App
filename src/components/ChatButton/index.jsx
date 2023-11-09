import { View, Text, TouchableOpacity, Image } from 'react-native'
import { color } from '../../utils/colors'
import { SIZES, STYLES } from '../../utils/constants'

import { useNavigation } from '@react-navigation/native'

export const ReceiverCard = ({ data }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('ChatScreen', { data })}
        >
            <View style={{
                marginLeft: SIZES.font,
                marginRight: SIZES.font,
                marginTop: SIZES.large,
                flexDirection: 'row',
            }}>
                <Image
                    source={data.avatar}
                    style={{
                        width: 50, height: 50,
                        borderWidth: 2,
                        borderRadius: 50 / 2,
                        borderColor: color.SILVER,
                    }}
                />
                <View style={{
                    flex: 1,
                    marginTop: 3,
                    marginLeft: 5,
                }}>
                    <Text style={{
                        ...STYLES.bold,
                        fontSize: SIZES.large,
                    }}>{data.partner}</Text>
                    <ForeTexts messages={data.messages} />
                </View>
            </View>
        </TouchableOpacity >
    )
}

function ForeTexts({ messages }) {
    if (messages.length !== 0) {
        const lastMessage = messages[messages.length - 1]
        let foremessage
        if (lastMessage.fromUser) { foremessage = 'You: ' + lastMessage.content }
        else { foremessage = lastMessage.content }
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text style={{
                    color: color.SILVER,
                    marginTop: 10,
                }}>
                    {foremessage}
                </Text>
                <Text style={{
                    top: -15,
                    right: 0,
                }}
                >{RemainingTime(lastMessage.date)}</Text>
            </View>
        )
    }

    return null
}

function RemainingTime({ thatDate }) {
    const startDate = new Date('2023-10-30T14:32:00')
    // const nowDate = new Date()
    const nowDate = new Date('2023-10-30T14:40:00')
    remTime = (nowDate - startDate) / 60000
    // remTime = Math.round(remTime)
    return remTime + 'm ago'
}