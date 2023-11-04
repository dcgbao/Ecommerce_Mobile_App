import { View, ScrollView, SafeAreaView, Text, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Header } from '../../components/Header';
import { styles } from "./style";
import { useState } from "react";

const DummyData = [
  {
    id: '123',
    date: '20/12/2015',
    price: '12.000 VND',
    status: 'Đã giao'
  },
  {
    id: '125',
    date: '20/12/2015',
    price: '12.000 VND',
    status: 'Đã giao'
  },
  {
    id: '126',
    date: '20/12/2015',
    price: '12.000 VND',
    status: 'Đang giao'
  },
  {
    id: '127',
    date: '20/12/2015',
    price: '12.000 VND',
    status: 'Đang giao'
  },
  {
    id: '128',
    date: '20/12/2015',
    price: '12.000 VND',
    status: 'Đã hủy'
  },
  {
    id: '129',
    date: '20/12/2015',
    price: '12.000 VND',
    status: 'Đã hủy'
  }
]

export const ManageProductScreen = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('Đang giao');

  const pageNavigationHandler = () => {
    console.log('pageNavigationHandler')
  }

  return (
    <>
      <Header action={pageNavigationHandler}/>
      <ScrollView style={styles.wrap}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.categories}>
          <TouchableOpacity
            style={[styles.category, selectedCategory === 'Đã giao' ? styles['selected-category'] : null]}
            onPress={() => setSelectedCategory('Đã giao')}
          >
              <Text style={selectedCategory === 'Đã giao' && {color: 'white'}}>Đã giao</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.category, selectedCategory === 'Đang giao' ? styles['selected-category'] : null]}
            onPress={() => setSelectedCategory('Đang giao')}
          >
            <Text style={selectedCategory === 'Đang giao' && {color: 'white'}}>Đang giao</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.category, selectedCategory === 'Đã hủy' ? styles['selected-category'] : null]}
            onPress={() => setSelectedCategory('Đã hủy')}
          >
            <Text style={selectedCategory === 'Đã hủy' && {color: 'white'}}>Đã hủy</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.posts}>
          {DummyData.filter(post=>post.status === selectedCategory).map((post)=>{
            return (
              <View key={post.id} style={styles.post}>
                  <View style={{marginVertical: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Mã số: {post.id}</Text>
                    <Text style={{color: 'gray'}}>{post.date}</Text>
                  </View>
                  <View style={{marginVertical: 5}}>
                    <Text>Tổng Thanh Toán: {post.price}</Text>
                  </View>
                  <View style={{marginVertical: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={{paddingHorizontal: 20, paddingVertical: 8, borderWidth: 1, borderRadius: 20}}>
                      <Text>Chi Tiết</Text>
                    </TouchableOpacity>
                    <Text style={post.status === 'Đã giao' ? {color: 'green'} : post.status === 'Đang giao' ? {color: 'orange'} : {color: 'red'}}>{post.status}</Text>
                  </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </>
  )
}