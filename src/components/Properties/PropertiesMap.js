import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView from "react-native-maps";
import { findPropertyById } from "../../actions/PropertiesActions";
import { useNavigation } from "@react-navigation/native";

export function PropertiesMap() {
  const { listFiltered } = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(findPropertyById());
  }, []);

  if (Array.isArray(listFiltered) && listFiltered.length > 0) {
    var { lat, lng } = listFiltered[0];
  } else {
    //var { lat, lng } = props.searchLatLng;
    var lat = 33.448376;
    var lng = -112.074036;
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
        latitudeDelta: 0.7,
        longitudeDelta: 0.7,
      }}
      showsUserLocation={true}
    >
      {listFiltered.map((marker, index) => (
        <MapView.Marker
          key={index}
          coordinate={{
            latitude: parseFloat(marker.lat),
            longitude: parseFloat(marker.lng),
          }}
          title={"$" + marker.price}
          onCalloutPress={() =>
            navigation.navigate("Property Detail", {
              id: marker.id,
            })
          }
        />
      ))}
    </MapView>
  );
}
