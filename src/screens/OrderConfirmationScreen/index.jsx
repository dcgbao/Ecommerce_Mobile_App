import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style';
import PaidIcon from '@mui/icons-material/Paid';
import { color } from '../../utils/colors';
import { BackButton } from '../../components/BackButton';


const OrderConfirmationData = {
    orderId: '123',
    deliveryMethod: 'Sử dụng dịch vụ giao hàng',
    totalMoney: '12.000.000 đ'
}


export default function OrderConfirmationScreen() {

    const handleNavigate = () => {
        console.log('Navigate to another page');
    }

    const handleConfirm = () => {
        console.log('Confirm this order');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackButton action={handleNavigate} />
            <View style={styles.container}>
                <View style={{ fontSize: 120, color: color.PRIMARY }}>
                    <PaidIcon fontSize='inherit' color='inherit'></PaidIcon>
                </View>
                <Text style={styles.confirmText}>Xác nhận thanh toán</Text>
                <Text style={styles.idText}>Thanh toán đơn hàng mã số {OrderConfirmationData.orderId} </Text>
                <View style={{ marginTop: 90, marginBottom: 150, width: '100%' }}>
                    <Text style={{ fontWeight: 600, marginBottom: 10, fontSize: 18 }}>Thông tin đơn hàng</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 }}>
                        <Text style={{ color: 'gray', fontSize: 16 }}>Phương thức giao hàng:</Text>
                        <Text style={{ fontWeight: 500, fontSize: 16 }}>{OrderConfirmationData.deliveryMethod}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'gray', fontSize: 16 }}>Tổng thanh toán:</Text>
                        <Text style={{ color: `${color.PRIMARY}`, fontSize: 16 }}>{OrderConfirmationData.totalMoney}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleConfirm}
                >
                    <Text style={styles.buttonLabel}>Xác nhận</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


