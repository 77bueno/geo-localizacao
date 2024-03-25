import { useEffect, useState } from "react";
import { Alert, Button, StatusBar, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  useEffect(() => {
    async function obterLocalizacao(){
      const {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== "granted"){
        Alert.alert("Ops!", "Você não autorizou o uso de geolocalização");
        return;
      }

      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      setMinhaLocalizacao(localizacaoAtual);
    }

    obterLocalizacao();
  }, [])

  const [localizacao, setLocalizacao] = useState({
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

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

  const marcarLocal = (event) => {
    console.log(event.nativeEvent);

    setLocalizacao({
       ...localizacao, // usado para pegar/manter os deltas

       /* Obtendo novos valores a partir do evento de pressionar */
      latitude: event.nativeEvent.cordinate.latitude,
      longitude:  event.nativeEvent.coordinate.longitude,
    });
  }

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <View style={estilos.viewBotao}>
          <Button title="Onde Estou?" onPress={marcarLocal} />
        </View>
        <View style={estilos.viewMapa}>
        <MapView
          style={estilos.mapa}
          initialRegion={regiaoInicialMapa}
          mapType="standard"
          userInterfaceStyle="dark" // somente IOS
        >
          <Marker coordinate={localizacao}></Marker>
        </MapView>
        </View>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1 },
  mapa: { width: "100%", height: "100%" },
});