import { Alert } from "react-native";
import api from "./api";

export async function listarUsuarios(setUsuarios) {
  try {
    await api.get("/usuarios").then((resposta) => {
      setUsuarios(resposta.data);
    });
  } catch (erro) {
    Alert.alert("Erro ao listar usuários: ", erro);
  }
}
