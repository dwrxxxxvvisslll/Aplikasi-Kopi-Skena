import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { height: 60 },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="home-outline"
                size={28}
                color={focused ? "#c97b54" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: "Heart",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="heart-outline"
                size={28}
                color={focused ? "#c97b54" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="cart-outline"
                size={28}
                color={focused ? "#c97b54" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="notif"
        options={{
          title: "notif",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="notifications-outline"
                size={28}
                color={focused ? "#c97b54" : "gray"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}