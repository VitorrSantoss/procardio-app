import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/images/procardio_logo_vertical_vermelha.png";

export default function selecaoPerfil() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={estilos.SafeArea}>
      {/*Espaço para os LogoMarca*/}
      <View style={estilos.container}>
        <View style={estilos.logoContainer}>
          <Image source={logo} style={estilos.logo} resizeMode="contain" />
        </View>

        {/*Espaço para os Botões*/}
        <View style={estilos.botoesContainer}>
          <TouchableOpacity
            style={estilos.botaoPrimario}
            onPress={() =>
              navigation.navigate("Login", { perfil: "profissional" })
            }
          >
            <Text style={estilos.textoBotaoPrimario}>
              Sou Profissional de Saúde
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.botoaoSecundario}
            onPress={() => navigation.navigate("Login", { perfil: "paciente" })}
          >
            <Text style={estilos.textoBotaoSecundario}>Sou Paciente</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 254,
    height: 254,
  },
  textoBotaoPrimario: {
    color: "white",
    fontSize: 15,
    fontWeight: 400,
    textAlign: "center",
  },
  botaoPrimario: {
    width: 325,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0063c7",
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  textoBotaoSecundario: {
    color: "#0063c7",
    fontSize: 15,
    fontWeight: 400,
    textAlign: "center",
  },
  botoaoSecundario: {
    width: 325,
    height: 50,
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#0063c7",
  },

  botoesContainer: {
    marginBottom: 55,
  },
});
