import { KeyboardAvoidingView, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { style } from "./style";
import { BackButton } from "../../components/BackButton";
import { AuthenInput } from "../../components/AuthenInput";
import { AuthenButton } from "../../components/AuthenButton";
import { AuthenTitle } from "../../components/AuthenTitle";
import { checkEmail } from "../../utils/checkInputFunction";
import { screenName } from "../../utils/screenName";

export function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleLogin = () => {
    console.log("ok")
  }

  useEffect(() => {
    setButtonDisabled(!(checkEmail(email)))
  }, [email])

  return (
    <KeyboardAvoidingView style={style.container} behavior="position">
      <BackButton action={() => navigation.navigate(screenName.LOGIN)}/>

      <AuthenTitle name={"Quên mật khẩu"} />

      <Text style={style.description}>
        {"Hãy điền email bạn đã dùng để đăng ký. Chúng tôi sẽ gửi một email để bạn thay đổi một mật khẩu mới."}
      </Text>

      <AuthenInput
        label={"Email"}
        value={email}
        setValue={setEmail}
        checkValue={checkEmail}
        length={50}
      />

      <View style={style.buttonContainer}>
        <AuthenButton
          label={"Gửi tới tôi"}
          action={handleLogin}
          disabled={buttonDisabled}
        />
      </View>
    </KeyboardAvoidingView>
  )
}