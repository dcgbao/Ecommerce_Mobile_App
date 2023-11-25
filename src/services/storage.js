import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getRefreshToken() {
  try {
    const value = await AsyncStorage.getItem('refreshToken')
    if (value !== null) {
      return value
    }
  } catch (error) { }
}

export async function getAccessToken() {
  try {
    const value = await AsyncStorage.getItem('accessToken');
    if (value !== null) {
      return value
    }
  } catch (error) { }
}

export async function setRefreshToken(value) {
  try {
    await AsyncStorage.setItem('refreshToken', value)
  } catch (error) { }
}

export async function setAccessToken(value) {
  try {
    await AsyncStorage.setItem('accessToken', value)
  } catch (error) { }
}