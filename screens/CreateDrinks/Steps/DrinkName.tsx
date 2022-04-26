import {
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { View, Text } from "../../../components/Themed";
import styles from "./styles";

export default function DrinkName() {
  return (
    <View
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      // keyboardVerticalOffset={64}
      style={styles.container}
    >
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Qual o nome do seu drink?</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite o nome do drink"
            autoFocus
            showSoftInputOnFocus
            onSubmitEditing={() => console.log("teste")}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={64}
        style={styles.buttomContainer}
      >
        <TouchableOpacity style={styles.buttom}>
          <Text style={styles.buttomLabel}>Adicionar ingredientes</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
