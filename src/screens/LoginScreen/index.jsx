import { KeyboardAvoidingView, Text } from "react-native";
import { style } from "./style";
import { BackButton } from "../../components/BackButton";
import { AuthenInput } from "../../components/AuthenInput";
import { AuthenOptionButton } from "../../components/AuthenOptionButton";
import { AuthenButton } from "../../components/AuthenButton";
import { AuthenTitle } from "../../components/AuthenTitle";
import { useEffect, useState } from "react";
import { screenName } from "../../utils/screenName";
import { http } from "../../services/http";
import { color } from "../../utils/colors";

export function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleLogin = async () => {
    try {
      await http.post('/auth/login', {
        username: username,
        password: password
      })
      navigation.navigate(screenName.MAIN_NAVIGATOR);
    } catch (error) {
      error.response.status && setError("Thông tin đăng nhập không chính xác")
    }
  }

  useEffect(() => {
    if(username && password) setButtonDisabled(false)
    else setButtonDisabled(true)
  }, [username, password])

  return (
    <KeyboardAvoidingView style={style.container} behavior="position">
      <BackButton action={() => navigation.navigate(screenName.REGISTER)} />

      <AuthenTitle name={"Đăng nhập"} />

      <AuthenInput
        label={"Tên đăng nhập"}
        value={username}
        setValue={setUsername}
        length={50}
      />

      <AuthenInput
        label={"Mật khẩu"}
        value={password}
        setValue={setPassword}
        length={50}
        secure={true}
      />

      {
        error && <Text style={{ color: color.RED, marginLeft: 12 }}>{error}</Text>
      }

      <AuthenOptionButton
        label={"Quên mật khẩu?"}
        action={() => navigation.navigate(screenName.FORGOT_PASSWORD)}
      />

      <AuthenButton
        label={"Đăng nhập"}
        action={handleLogin}
        disabled={buttonDisabled}
      />

    </KeyboardAvoidingView>
  )
}