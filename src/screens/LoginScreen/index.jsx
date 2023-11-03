import { KeyboardAvoidingView } from "react-native";
import { style } from "./style";
import { BackButton } from "../../components/BackButton";
import { AuthenInput } from "../../components/AuthenInput";
import { AuthenOptionButton } from "../../components/AuthenOptionButton";
import { AuthenButton } from "../../components/AuthenButton";
import { AuthenTitle } from "../../components/AuthenTitle";
import { useEffect, useState } from "react";
import { checkEmail, checkPassword } from "../../utils/checkInputFunction";
import { screenName } from "../../utils/screenName";

export function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleLogin = () => {
    console.log("ok")
  }

  useEffect(() => {
    setButtonDisabled(!(checkEmail(email) && checkPassword(password)))
  }, [email, password])

  return (
    <KeyboardAvoidingView style={style.container} behavior="position">
      <BackButton action={() => navigation.navigate(screenName.REGISTER)} />

      <AuthenTitle name={"Đăng nhập"} />

      <AuthenInput
        label={"Email"}
        value={email}
        setValue={setEmail}
        checkValue={checkEmail}
        length={50}
      />

      <AuthenInput
        label={"Mật khẩu"}
        value={password}
        setValue={setPassword}
        checkValue={checkPassword}
        length={50}
        secure={true}
        warning={"Định dạng email không đúng, vui lòng thử lại."}
      />

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