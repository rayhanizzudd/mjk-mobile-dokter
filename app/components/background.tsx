// import { ImageBackground, StyleSheet } from "react-native";
// import React from "react";

// export default function Background({ children }) {
//   return (
//     <ImageBackground
//       source={require("../../assets/images/background.png")}
//       className="flex-1 w-full h-full justify-center items-center"
//     >
//       {children}
//     </ImageBackground>
//   );
// }

import { StatusBar, View, ImageBackground } from "react-native";
import React from "react";

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")} // Ganti dengan path gambar kamu
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      {/* StatusBar agar navbar HP mengikuti warna background */}
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />

      <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
        {children}
      </View>
    </ImageBackground>
  );
}

