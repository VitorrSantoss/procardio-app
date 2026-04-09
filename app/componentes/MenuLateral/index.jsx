import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuLateral() {
  return (
    <View style={estilos.container}>
      <View style={estilos.profileSection}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=12" }}
          style={estilos.profilePic}
        />
        <Text style={estilos.profileName}>Vitor Santos</Text>
      </View>

      {/* TODO: IMPLEMENTAR A LISTA DE INTENS DO MENU */}
      <View style={estilos.menuItemsList}>
        <MenuItem
          icon={"user"}
          label={"Editar Perfil"}
          IconComponent={Feather}
        />
        <MenuItem
          icon={"receipt-outline"}
          label={"Recibos de Pagamentos"}
          IconComponent={Ionicons}
        />
        <MenuItem
          icon={"pill"}
          label={"Minhas Receitas"}
          IconComponent={MaterialCommunityIcons}
        />
        <MenuItem
          icon={"file-document-outline"}
          label={"Exames Solicitados"}
          IconComponent={MaterialCommunityIcons}
        />
        <MenuItem
          icon={"bell-outline"}
          label={"Editar Perfil"}
          IconComponent={MaterialCommunityIcons}
        />
      </View>

      <View style={estilos.footer}>
        <MenuItem
          icon={"help-circle-outline"}
          label={"Ajuda"}
          IconComponent={Ionicons}
        />
        <MenuItem
          icon={"settings-outline"}
          label={"Configurações"}
          IconComponent={Ionicons}
        />
      </View>
    </View>
  );
}

function MenuItem({ icon, label, IconComponent }) {
  return (
    <TouchableOpacity style={estilos.drawerItem}>
      <IconComponent
        name={icon}
        size={22}
        color={"#0063c7"}
        style={estilos.itemIcon}
      />
      <Text style={estilos.itemText}>{label}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileSection: {
    marginBottom: 40,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  profilePic: { width: 60, height: 60, borderRadius: 30, marginBottom: 10 },
  profileName: { fontSize: 16, fontWeight: "bold", color: "#000" },
  menuItemsList: { flex: 1 },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  itemIcon: { marginRight: 20, width: 25, textAlign: "center" },
  itemText: { fontSize: 15, color: "#333" },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    paddingTop: 10,
    paddingBottom: 30,
  },
});
