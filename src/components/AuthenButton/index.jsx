import { Text, TouchableOpacity } from "react-native"
import { style } from "./style"

export function AuthenButton({
  action,
  label,
  disabled,
}) {
  return (
    <TouchableOpacity 
      style={(!disabled && style.container) || [style.container, style.disabled]}
      onPress={action}
      disabled={disabled}
    >
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  )
}