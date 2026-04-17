import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Checkbox({ label, checked, onPress }) {
  return (
    <TouchableOpacity style={estilos.checkboxContainer} onPress={onPress}>
      <Ionicons
        name={checked ? "checkbox" : "square-outline"}
        size={20}
        color={checked ? "#0063c7" : "#999"}
      ></Ionicons>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkboxLabel: {
    marginLeft: 5,
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
});
