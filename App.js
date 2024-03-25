import { StatusBar, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    latitude: -10,
    longitude: -55,

    /* Definição do zoom do mapa.
    Quanto menor, mais próximo o mapa fica.
    Quanto maior, mais longe o mapa fica */
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  };
  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView
         style={estilos.mapa}
         initialRegion={regiaoInicialMapa}
         mapType="hybrid"
         userInterfaceStyle="dark" // somente IOS
         maxZoomLevel={15}
         minZoomLevel={15}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});