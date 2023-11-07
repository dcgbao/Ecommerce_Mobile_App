import React from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from './style';
import { color } from '../../utils/colors';
import { Paper } from '@mui/material';


const OrderDetailData = {
    productList: [
        {
            name: 'Tai nghe Bluetooth',
            price: '1.000.000 đ',
            date: '3 tuần trước',
            location: 'Tp Hồ Chí Minh',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgVa2YjBLWQ9Er2-IObvd6JLWLdWsPI4spw&usqp=CAU'
        },
        {
            name: 'AirPods Pro',
            price: '10.000.000 đ',
            date: '2 phút trước',
            location: 'Tp Hồ Chí Minh',
            image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000'
        },
        {
            name: 'iPhone 15 Pro',
            price: '1.000.000 đ',
            date: '5 ngày trước',
            location: 'Tp Hồ Chí Minh',
            image: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1693010535416'
        }
    ],
    deliveryMethod: 'Sử dụng dịch vụ giao hàng',
    totalMoney: '12.000.000 đ'
}


export const OrderDetailScreen = () => {

    const handleNavigate = () => {
        console.log('Navigate to another page');
    }

    const handleDelete = () => {
        console.log('Delete this order');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Header action={handleNavigate} />
                <ScrollView style={styles.content}>
                    <Text style={styles.pageName}>Chi tiết đơn hàng</Text>
                    <Text style={{ fontWeight: 600, marginBottom: 10, fontSize: 16 }}>{OrderDetailData.productList.length} sản phẩm</Text>
                    {OrderDetailData.productList.map((item, id) => (
                        <Paper style={{ borderRadius: 10, marginBottom: 15 }} key={id}>
                            <View style={styles.itemContainer}>
                                <Image style={{ width: '30%', height: '100%' }} source={{ uri: `${item.image}` }} />
                                <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
                                    <Text style={{ fontWeight: 600, fontSize: 17 }}>{item.name}</Text>
                                    <Text style={{ color: `${color.PRIMARY}`, fontSize: 17 }}>{item.price}</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ color: 'gray' }}>{item.date}</Text>
                                        <Text style={{ color: 'gray' }}>{item.location}</Text>
                                    </View>
                                </View>
                            </View>
                        </Paper>
                    ))}

                    <View style={{ marginTop: 30, marginBottom: 60 }}>
                        <Text style={{ fontWeight: 600, marginBottom: 10, fontSize: 16 }}>Thông tin đơn hàng</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                            <Text style={{ color: 'gray' }}>Phương thức giao hàng:</Text>
                            <Text style={{ fontWeight: 500 }}>{OrderDetailData.deliveryMethod}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'gray' }}>Tổng thanh toán:</Text>
                            <Text style={{ color: `${color.PRIMARY}` }}>{OrderDetailData.totalMoney}</Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={handleDelete}>
                        <Text style={styles.buttonLabel}>Hủy đơn</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}