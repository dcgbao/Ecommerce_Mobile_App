import { KeyboardAvoidingView, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { style } from "./style";
import { BackButton } from "../../components/BackButton";
import { AuthenInput } from "../../components/AuthenInput";
import { AuthenButton } from "../../components/AuthenButton";
import { AuthenTitle } from "../../components/AuthenTitle";
import { checkEmail } from "../../utils/checkInputFunction";
import { screenName } from "../../utils/screenName";
import { http } from "../../services/http";
import { color } from "../../utils/colors";
import { setAccessToken, setRefreshToken } from "../../services/storage";
import { privateHttp } from "../../services/privateHttp";


export function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleSubmitEmail = async () => {
    try {
      await http.post('/auth/forgot', { email: email });
      setShowOtp(true);
    } catch (error) { }
  };

  const handleSubmitOtp = async () => {
    try {
      const response = await http.post('/auth/submitOTP', { email: email, otp: otp });
      setShowOtp(false);
      setShowPassword(true);
      await setAccessToken(response.data.accessToken);
      await setRefreshToken(response.data.refreshToken);
    } catch (error) {
      setError("Mã OTP không đúng");
    }
  };

  const handleSubmitReset = async () => {
    try {
      await privateHttp.post('/auth/reset_password', { password: password, email: email });
      navigation.navigate(screenName.LOGIN);
    } catch (error) { }
  };

  useEffect(() => {
    if (!showOtp) {
      setButtonDisabled(!checkEmail(email));
    }
    else {
      setButtonDisabled(!otp || !checkEmail(email));
    }
  }, [email, showOtp, otp]);

  return (
    <KeyboardAvoidingView style={style.container} behavior="position">
      <BackButton action={() => navigation.navigate(screenName.LOGIN)} />

      <AuthenTitle name={"Quên mật khẩu"} />

      <Text style={style.description}>
        {"Hãy điền email bạn đã dùng để đăng ký. Chúng tôi sẽ gửi một email để bạn thay đổi một mật khẩu mới."}
      </Text>

      <AuthenInput
        label={"Email"}
        value={email}
        setValue={setEmail}
        checkValue={checkEmail}
        length={50} />

      {showOtp && <AuthenInput
        label={"Mã OTP"}
        value={otp}
        setValue={setOtp}
        length={50} />}

      {showPassword && <AuthenInput
        label={"Mật khẩu mới"}
        value={password}
        setValue={setPassword}
        length={50} />}

      {error && <Text style={{ color: color.RED, marginLeft: 12 }}>{error}</Text>}

      <View style={style.buttonContainer}>
        <AuthenButton
          label={"Gửi tới tôi"}
          action={showOtp ? handleSubmitOtp : showPassword ? handleSubmitReset : handleSubmitEmail}
          disabled={buttonDisabled} />
      </View>
    </KeyboardAvoidingView>
  );
}
