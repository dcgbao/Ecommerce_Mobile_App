import React, { useState } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Header } from '../../components/Header';
import { styles } from './style';
import Icon from "react-native-vector-icons/AntDesign"
import { color } from '../../utils/colors';

const DummyData = [
  {
    name: 'Tai nghe vip pro',
    price: '1.000.000 VND',
    date: '3 tuần trước',
    location: 'Tp Hồ Chí Minh',
    image: 'https://soundpeatsvietnam.com/wp-content/uploads/2023/05/gofree.jpg'
  },
  {
    name: 'Bàn phím akko',
    price: '2.000.000 VND',
    date: '2 tuần trước',
    location: 'Tp Hồ Chí Minh',
    image: 'https://phongvu.vn/cong-nghe/wp-content/uploads/2023/03/ban-phim-akko.jpg'
  },
  {
    name: 'laptop gaming',
    price: '20.000.000 VND',
    date: '5 phút trước',
    location: 'Tp Hồ Chí Minh',
    image: 'https://www.anphatpc.com.vn/media/news/1308_Laptop-Gaming-tot-nhat-2022.jpg'
  }
]

export const UserCartScreen = () => {
  const [totalMoney, setTotalMoney] = useState('12.000.000 VND');

  const pageNavigationHandler = () => {
    console.log('pageNavigationHandler');
  }

  return (
    <>
      <Header action={pageNavigationHandler} />
      <ScrollView style={styles.wrap}>
        <Text style={styles.title}>Giỏ hàng của tôi</Text>
        {DummyData.map((product, idx) => (
          <View style={styles.product} key={idx}>
            <Image style={{ width: '30%', height: '100%' }} source={{ uri: `${product.image}` }} />
            <View style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{product.name}</Text>
                <TouchableOpacity>
                  <Icon name='delete' size={20} style={{ color: 'red' }} />
                </TouchableOpacity>
              </View>
              <Text style={{ color: `${color.PRIMARY}` }}>Đơn giá: {product.price}</Text>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'gray' }}>{product.date}</Text>
                <Text style={{ color: 'gray' }}>{product.location}</Text>
              </View>
            </View>
          </View>
        )
        )}
        <View style={styles.select}>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Thanh toán trực tiếp', value: 0 },
              { label: 'Sử dụng dịch vụ vận chuyển', value: 1 },
            ]}
          />
        </View>
        <View style={{ marginVertical: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>Tổng thanh toán:</Text>
          <Text style={{ color: `${color.PRIMARY}` }}>{totalMoney}</Text>
        </View>

        <TouchableOpacity style={styles.button} >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Đặt Hàng</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}