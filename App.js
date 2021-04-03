import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import profile from "./assets/profile.jpg"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image}/>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label, styles.info]}>Meeky Pangbe</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label, styles.info]}>Meeky@mail.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label, styles.info]}>Male</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginTop:1,
    backgroundColor: "#5B85AA"

  },
  image:{
    width: 150,
    height: 150,
    marginBottom: 40,
    alignSelf: "center",
    borderRadius: 75,
    marginTop: 100
  },
  detailContainer:{
    flexDirection:"row",
    marginVertical: 5
  },
  label:{
    borderColor: "black",
    borderWidth: 2,
    fontSize: 20,
    flex: 2.5,
    paddingHorizontal: 5
  },
  info:{
    flex: 7.5,
  }
});
