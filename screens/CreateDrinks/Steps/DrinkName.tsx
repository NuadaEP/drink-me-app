import { TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "../../../components/Themed";

export default function DrinkName() {
  return (
    <View>
      <View>
        <Text>Qual o nome do seu drink?</Text>
      </View>
      <View>
        <TextInput placeholder="Digite o nome do drink" />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Adicionar ingredientes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
