import { View, TextInput, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import { style } from "./style";
import { useState } from "react";
import { color } from "../../utils/colors";

export function AuthenInput({
  label,
  value,
  setValue,
  length,
  checkValue,
  warning,
  secure
}
) {
  const [valid, setValid] = useState(true)

  const handleOnChange = (value) => {
    if (!value) {
      setValid(true)
    } else {
      setValid(checkValue(value))
    }
    setValue(value)
  }

  return (
    <View style={(valid && style.container) || [style.container, style.invalid]}>
      <Text style={(!valid && [style.label, style.warning]) || style.label}>
        {(valid && label) || (warning || label)}
      </Text>

      <TextInput
        style={style.input}
        value={value}
        placeholder={label}
        maxLength={length}
        secureTextEntry={secure}
        onChangeText={handleOnChange}
      />

      {value && (
        valid ?
          <Icon
            style={style.icon}
            name="check"
            color={color.PRIMARY}
            size={24}
          />
          :
          <Icon
            style={style.icon}
            name="close"
            color={color.RED}
            size={24}
          />
      )}
    </View>
  )
}