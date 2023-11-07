import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { color } from '../../utils/colors'
import { SIZES, STYLES, LAYERS, assets, SHADOWS } from '../../utils/constants'
import { useState } from 'react'


export const PartnerBar = ({ avatar, name }) => {
    return (
        <View style={{
            zIndex: LAYERS.second,
            backgroundColor: color.WHITE,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: SIZES.base,
            marginBottom: SIZES.exextraLarge,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                    <Image
                        source={assets.left}
                        style={{
                            width: 20, height: 20,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={avatar}
                        style={{
                            width: 40, height: 40,
                            marginLeft: 5,
                        }}
                    />
                </TouchableOpacity>
                <Text style={{
                    fontSize: SIZES.extraLarge,
                    ...STYLES.bold,
                    color: color.BLACK,
                    marginLeft: 15,
                }}
                >{name}</Text>
            </View>
            <TouchableOpacity>
                <Image
                    source={assets.more}
                    style={{ marginRight: SIZES.base }}
                />
            </TouchableOpacity>
        </View>
    )
}

export const ChatBox = ({ msg, ava }) => {
    if (msg.fromUser)
        return (
            <View style={{
                margin: SIZES.font,
                ...SHADOWS.medium,
            }}>
                <View style={{
                    borderRadius: SIZES.font / 2,
                    backgroundColor: color.PRIMARY,
                    maxWidth: '90%',
                    alignSelf: 'flex-end',
                    padding: SIZES.base,

                }}>
                    <Text style={{
                        color: color.WHITE,
                        fontSize: SIZES.large,
                    }}>{msg.content}</Text>
                </View>
                <Text style={{
                    fontSize: SIZES.font,
                    color: color.SILVER,
                    textAlign: 'right',
                    marginTop: 5,
                }}>{msg.time}</Text>
            </View>
        )
    else
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
            }}>
                <Image
                    source={ava}
                    style={{
                        width: 30, height: 30,
                        marginLeft: SIZES.base,
                        marginTop: SIZES.medium,
                    }}
                />
                <View style={{
                    marginTop: SIZES.font,
                    ...SHADOWS.medium,
                    marginLeft: SIZES.base,

                }}>
                    <View style={{
                        borderRadius: SIZES.font / 2,
                        backgroundColor: color.GREY,
                        maxWidth: '90%',
                        padding: SIZES.base,

                    }}>
                        <Text style={{
                            color: color.BLACK,
                            fontSize: SIZES.large,
                        }}>{msg.content}</Text>
                    </View>
                    <Text style={{
                        fontSize: SIZES.font,
                        color: color.SILVER,
                        marginTop: 5,
                        textAlign: 'left',
                    }}>{msg.time}</Text>
                </View>
            </View>
        )
}

export const BottomBar = () => {
    const [placeHolder, setPlaceHolder] = useState('Type your response here...')
    const [inputHolder, setInputHolder] = useState('')

    return (
        <KeyboardAvoidingView
            behavior='position'
            style={{
                // flex: 1,
                zIndex: LAYERS.top,
            }}>
            <View style={{
                padding: SIZES.font,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: SIZES.base,
                borderTopWidth: 1,
                borderColor: color.GREY,
                backgroundColor: color.WHITE,
            }}>
                <TouchableOpacity>
                    <Image
                        source={assets.clip}
                        style={{
                            width: 20, height: 20,
                            marginLeft: 5
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: color.GREY,
                    padding: SIZES.base,
                    borderRadius: SIZES.font / 2,
                    width: 250,
                }}>
                    <TextInput
                        onPressIn={() => {
                            if (inputHolder === '')
                                setPlaceHolder('')
                        }}
                        onEndEditing={() => {
                            if (inputHolder === '')
                                setPlaceHolder('Type your response here...')
                            else
                                setPlaceHolder(inputHolder)
                        }}
                        onChange={(input) => {
                            setInputHolder(input.nativeEvent.text)
                        }}
                        style={{
                            fontSize: SIZES.font,
                            color: color.SILVER,
                            marginLeft: 10,
                            minWidth: 200,
                        }}>{placeHolder}</TextInput>
                    <Image
                        source={assets.file}
                    />
                </View>
                <TouchableOpacity>
                    <Image
                        source={assets.camera} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={assets.micro}
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}