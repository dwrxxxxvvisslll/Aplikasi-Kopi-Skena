import { View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions, } from "react-native";
import { useRouter } from "expo-router";
  
  export default function GetStarted() {
    const router = useRouter();
    const { width, height } = useWindowDimensions();
  
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/bghome.png")}
          style={[styles.image, { width: width * 1.0, height: height * 0.6 }]}
          resizeMode="cover"
        />
        <Text style={[styles.title, { fontSize: width * 0.07 }]}>
          Fall in Love with Coffee in Blissful Delight!
        </Text>
        <Text style={[styles.subtitle, { fontSize: width * 0.04 }]}>
          Welcome to our cozy coffee corner, where every cup is a delightful for
          you.
        </Text>
  
        <TouchableOpacity
          onPress={() => router.replace("/home")}
          style={[styles.button, { width: width * 0.8, padding: height * 0.02 }]}
        >
          <Text style={[styles.buttonText, { fontSize: width * 0.05 }]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    image: {
      marginBottom: 16,
      borderRadius: 10,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      color: "#fff",
      marginBottom: 8,
    },
    subtitle: {
      textAlign: "center",
      color: "#ddd",
      marginVertical: 10,
    },
    button: {
      backgroundColor: "#c97b54",
      borderRadius: 30,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });