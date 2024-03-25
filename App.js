import { StatusBar, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicialMapa = {
    // São Paulo
    latitude: -23.533773,
    longitude: -45.65529,

    /* Brasil 
    latitude: -10,
    longitude: -55, */

    /* Definição do zoom do mapa.
    Quanto menor, mais próximo o mapa fica.
    Quanto maior, mais longe o mapa fica */
    latitudeDelta: 0.4,
    longitudeDelta: 0.4,
  };

  /* Coordenadas para o Marker que será aplicado ao MapView */
  const localização = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
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
        // maxZoomLevel={15}
        // minZoomLevel={5}
        >
          <Marker coordinate={localizacao}>
            {/* Ícone personalizado */}
            <Image source={require("./assets/ghost.png")} />
          </Marker>
        </MapView>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});