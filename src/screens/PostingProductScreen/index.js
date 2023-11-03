import { View, ScrollView, SafeAreaView, Text, TextInput, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Header from '../../components/Header';
import { screenName } from '../../utils/screenName';

import { styles } from "./style";

const PostingScreen = ({ navigation }) => {
  const pageNavigationHandler = () => {
    navigation.navigate(screenName.LOGIN);
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView>
        <View style={styles.container}>
          <Header action={pageNavigationHandler} title={'Đăng sảng phẩm'} />
          <ScrollView style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Tải ảnh lên</Text>
              <View style={styles['select-image']}>
                <Image source={require('../../../assets/images/select_image.png')} />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Phương thức thanh toán</Text>
              <View style={styles.input}>
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: 'Thanh toán trực tiếp', value: 0 },
                    { label: 'Sử dụng dịch vụ vận chuyển', value: 2 },
                  ]}
                />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Phân loại</Text>
              <View style={styles.input}>
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  items={[
                    { label: 'Đồ công nghệ', value: 0 },
                    { label: 'Gia Sức', value: 1 },
                    { label: 'Phương tiện di chuyển', value: 3 },
                  ]}
                />
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Tên sản phẩm</Text>
              <TextInput placeholder="Ví dụ: tai nghe" style={styles.input} />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Mức giá</Text>
              <TextInput placeholder="Ví dụ: 12.000 VND" style={styles.input} />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Miêu tả</Text>
              <TextInput multiline={true} placeholder="Ví dụ: tai nghe cách âm" style={[styles.input, { height: 200 }]} />
            </View>

            <View style={styles.confirm}>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#67C4A7' }]} title='Save'><Text style={{ color: 'white', fontWeight: '500' }}>Lưu</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.button, { backgroundColor: '#D9D9D9' }]} title='Save'><Text style={{ color: 'black', fontWeight: '500' }}>Hủy</Text></TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default PostingScreen