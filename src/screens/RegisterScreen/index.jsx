import { KeyboardAvoidingView, Text } from "react-native";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { style } from "./style";
import { BackButton } from "../../components/BackButton";
import { AuthenInput } from "../../components/AuthenInput";
import { AuthenOptionButton } from "../../components/AuthenOptionButton";
import { AuthenButton } from "../../components/AuthenButton";
import { AuthenTitle } from "../../components/AuthenTitle";
import { screenName } from "../../utils/screenName";
import { http } from "../../services/http";
import {
  checkConfirmPassword,
  checkEmail,
  checkName,
  checkPassword
} from "../../utils/checkInputFunction";
import { color } from "../../utils/colors";

export function RegisterScreen({ navigation }) {
  const [confirm, setConfirm] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [error, setError] = useState('')
  const { getValues, setValue, watch } = useForm({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      picture: "https://vn4u.vn/wp-content/uploads/2023/09/logo-co-tinh-nhat-quan-2.png",
      role: "user"
    }
  })

  const handleRegister = async () => {
    try {
      await http.post('/auth/register', getValues());
      navigation.navigate(screenName.LOGIN);
    } catch (error) {
      error.response.status === 400 && setError("Người dùng đã tồn tại")
    }
  }

  useEffect(() => {
    setButtonDisabled(
      !(checkName(getValues('fullname'))
        && checkEmail(getValues('email'))
        && checkPassword(getValues('password'))
        && checkConfirmPassword(getValues('password'), confirm))
    )
  }, [watch(), confirm])

  return (
    <KeyboardAvoidingView style={style.container} behavior="position">
      <BackButton />

      <AuthenTitle name={"Đăng ký"} />

      <AuthenInput
        label={"Họ và tên"}
        value={getValues('fullname')}
        setValue={(value) => setValue('fullname', value)}
        checkValue={checkName}
        length={50}
      />

      <AuthenInput
        label={"Tên đăng nhập"}
        value={getValues('username')}
        setValue={(value) => setValue('username', value)}
        length={50}
      />

      <AuthenInput
        label={"Email"}
        value={getValues('email')}
        setValue={(value) => setValue('email', value)}
        checkValue={checkEmail}
        length={50}
        warning={"Email không hợp lệ"}
      />

      <AuthenInput
        label={"Mật khẩu"}
        value={getValues('password')}
        setValue={(value) => setValue('password', value)}
        checkValue={checkPassword}
        length={50}
        warning={"Mật khẩu dài tối thiểu 8 ký tự"}
        secure={true}
      />

      <AuthenInput
        label={"Xác nhận mật khẩu"}
        value={confirm}
        setValue={setConfirm}
        checkValue={(value) => checkConfirmPassword(getValues('password'), value)}
        length={50}
        warning={"Mật khẩu xác nhận không đúng"}
        secure={false}
      />

      {
        error && <Text style={{color: color.RED, marginLeft: 12}}>{error}</Text>
      }

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