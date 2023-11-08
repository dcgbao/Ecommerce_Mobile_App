import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import { styles } from "./style";
import { Avatar, Title, Caption, Text } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { color } from '../../utils/colors';
import { screenName } from '../../utils/screenName';

export function ProfileScreen({ navigation }) {

    const handleNavigateBoughtProducts = () => {
        console.log('Navigate to bought products page');
        navigation.navigate(screenName.ORDERED_MANAGEMENT);
    }

    const handleNavigateSoldProducts = () => {
        console.log('Navigate to sold products page');
        navigation.navigate(screenName.POSTING_MANAGEMENT);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.BACKGROUND }}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.pageName}>Tài khoản</Text>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 70 }}>
                    <Avatar.Image
                        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar2.png' }}
                        size={80} />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={styles.userName}>Gia Bảo</Title>
                        <Caption style={styles.userEmail}>giabao@gmail.com</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <Title style={styles.rowTitle}>Đánh giá</Title>
                    <Caption style={styles.rowCaption}>9.5 điểm</Caption>
                </View>
                <View style={styles.rowWrapper}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleNavigateBoughtProducts}>
                        <View style={styles.row}>
                            <Title style={styles.rowTitle}>Đơn mua</Title>
                            <Caption style={styles.rowCaption}>18 đơn mua</Caption>
                        </View>
                        <View style={styles.rowSpacer}></View>
                        <View style={styles.row}>
                            <FeatherIcon name="chevron-right" color="#ababab" size={35} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rowWrapper}>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={handleNavigateSoldProducts}>
                        <View style={styles.row}>
                            <Title style={styles.rowTitle}>Đơn bán</Title>
                            <Caption style={styles.rowCaption}>10 đơn bán</Caption>
                        </View>
                        <View style={styles.rowSpacer}></View>
                        <View style={styles.row}>
                            <FeatherIcon name="chevron-right" color="#ababab" size={35} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}