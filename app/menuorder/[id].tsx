import React from "react";
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView, StatusBar, Dimensions, } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const products = {
  "1": {
    name: "Caffe Mocha",
    price: "$4.53",
    description:
      "A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk the fo...",
    image: "https://placehold.co/600x400",
    rating: 4.8,
    reviews: 230,
  },
};

export default function OrderScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // ✅ Handle jika id kosong atau tidak valid
  if (!id) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Invalid product ID</Text>
      </SafeAreaView>
    );
  }

  const product = products[String(id)];

  // ✅ Handle jika product tidak ditemukan
  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.iconButton}>
          <FontAwesome name="chevron-left" size={18} color="black" />
        </Pressable>
        <Text style={styles.headerTitle}>Detail</Text>
        <Pressable style={styles.iconButton}>
          <FontAwesome name="heart-o" size={18} color="black" />
        </Pressable>
      </View>

      {/* Gambar Produk */}
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

      {/* Konten Produk */}
      <View style={styles.contentContainer}>
        {/* Info Produk */}
        <View style={styles.productInfo}>
          <Text style={styles.title}>{product.name}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="#FFA500" />
              <Text style={styles.ratingText}>{product.rating}</Text>
              <Text style={styles.ratingCount}>({product.reviews})</Text>
            </View>
            <View style={styles.icons}>
              <FontAwesome name="coffee" size={16} color="#FFA500" />
              <FontAwesome name="fire" size={16} color="#FFA500" />
              <FontAwesome name="leaf" size={16} color="#FFA500" />
            </View>
          </View>
        </View>

        {/* Deskripsi Produk */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>
            {product.description}
            <Text style={styles.readMore}> Read More</Text>
          </Text>
        </View>

        {/* Ukuran Produk */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeOptions}>
            {["S", "M", "L"].map((size) => (
              <Pressable
                key={size}
                style={[
                  styles.sizeButton,
                  size === "M" && styles.sizeButtonSelected,
                ]}
              >
                <Text
                  style={[
                    styles.sizeButtonText,
                    size === "M" && styles.sizeButtonTextSelected,
                  ]}
                >
                  {size}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Spacer */}
        <View style={styles.spacer} />

        {/* Footer */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>
          <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  errorText: {
    textAlign: "center",
    fontSize: 18,
    color: "red",
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  iconButton: {
    padding: 8,
  },
  image: {
    width: width,
    height: width * 0.6,
    backgroundColor: "#EEE",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  productInfo: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontWeight: "500",
    color: "#FFA500",
  },
  ratingCount: {
    color: "#999",
    marginLeft: 4,
  },
  icons: {
    flexDirection: "row",
    gap: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#666",
    marginBottom: 8,
  },
  description: {
    color: "#999",
    fontSize: 14,
    lineHeight: 20,
  },
  readMore: {
    color: "#FFA500",
  },
  sizeOptions: {
    flexDirection: "row",
    gap: 12,
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    width: width / 4,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeButtonSelected: {
    backgroundColor: "#FFF5E6",
    borderColor: "#FFA500",
  },
  sizeButtonText: {
    fontSize: 16,
    color: "#666",
  },
  sizeButtonTextSelected: {
    color: "#FFA500",
  },
  spacer: {
    height: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  priceLabel: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFA500",
  },
  buyButton: {
    backgroundColor: "#FFA500",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  buyButtonText: {
    color: "#FFF",
    fontSize: 16,
  },
});
