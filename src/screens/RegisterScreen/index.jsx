import { KeyboardAvoidingView } from "react-native";
import { useEffect, useState } from "react";
import { style } from "./style";
import { BackButton } from "../../components/BackButton";
import { AuthenInput } from "../../components/AuthenInput";
import { AuthenOptionButton } from "../../components/AuthenOptionButton";
import { AuthenButton } from "../../components/AuthenButton";
import { AuthenTitle } from "../../components/AuthenTitle";
import { checkConfirmPassword, checkEmail, checkName, checkPassword } from "../../utils/checkInputFunction";
import { screenName } from "../../utils/screenName";

export function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleRegister = () => {
    console.log("ok")
  }

  useEffect(() => {
    setButtonDisabled(
      !(checkName(firstName)
        && checkName(lastName)
        && checkEmail(email)
        && checkPassword(password)
        && checkConfirmPassword(password, confirm))
    )
  }, [
    firstName,
    lastName,
    email,
    password,
    confirm
  ])

  return (
    <KeyboardAvoidingView style={style.container} behavior="position">
      <BackButton />

      <AuthenTitle name={"Đăng ký"} />

      <AuthenInput
        label={"Họ"}
        value={firstName}
        setValue={setFirstName}
        checkValue={checkName}
        length={50}
      />

      <AuthenInput
        label={"Tên"}
        value={lastName}
        setValue={setLastName}
        checkValue={checkName}
        length={50}
      />

      <AuthenInput
        label={"Email"}
        value={email}
        setValue={setEmail}
        checkValue={checkEmail}
        length={50}
        warning={"Email không hợp lệ"}
      />

      <AuthenInput
        label={"Mật khẩu"}
        value={password}
        setValue={setPassword}
        checkValue={checkPassword}
        length={50}
        warning={"Mật khẩu dài tối thiểu 8 ký tự"}
        secure={true}
      />

      <AuthenInput
        label={"Xác nhận mật khẩu"}
        value={confirm}
        setValue={setConfirm}
        checkValue={(value) => checkConfirmPassword(password, value)}
        length={50}
        warning={"Mật khẩu xác nhận không đúng"}
        secure={false}
      />

      <AuthenOptionButton
        label={"Bạn đã có tài khoản?"}
        action={() => navigation.navigate(screenName.LOGIN)}
      />

      <AuthenButton
        label={"Đăng ký"}
        action={handleRegister}
        disabled={buttonDisabled}
      />
    </KeyboardAvoidingView>
  )
}