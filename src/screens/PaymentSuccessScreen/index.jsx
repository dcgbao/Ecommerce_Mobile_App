import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { color } from '../../utils/colors';

export default function PaymentSuccessScreen() {

    const handleReturn = () => {
        console.log('Return to Homepage');
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={{ fontSize: 100, color: color.PRIMARY }}>
                    <CheckCircleIcon fontSize='inherit' color='inherit'></CheckCircleIcon>
                </View>
                <Text style={styles.successText}>Đặt hàng thành công!</Text>
                <Text style={styles.messageText}>Đơn hàng sẽ được xử lý trong thời gian sớm nhất.</Text>
                <Text style={styles.thankText}>Cảm ơn bạn đã mua hàng!</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleReturn}
                >
                    <Text style={styles.buttonLabel}>Quay về trang chủ</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


