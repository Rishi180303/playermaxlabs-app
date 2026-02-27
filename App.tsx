import React from 'react';
import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts, Outfit_500Medium, Outfit_600SemiBold, Outfit_700Bold } from '@expo-google-fonts/outfit';

export default function App() {
  const [fontsLoaded] = useFonts({
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <View style={styles.topSpacer} />

        <View style={styles.hero}>
          <Text style={styles.title}>
            Player Max Labs<Text style={styles.green}>.</Text>
          </Text>

          <Text style={styles.subtitle}>
            Where <Text style={styles.green}>Coaches</Text> and{'\n'}
            <Text style={styles.green}>Athletes</Text> level up
          </Text>
        </View>

        <View style={styles.bottomBlock}>
          <View style={styles.buttons}>
            <Pressable style={styles.button}>
              <MaterialCommunityIcons name="email-outline" size={26} color="#080B18" />
              <Text style={styles.buttonText}>Sign up with Email</Text>
            </Pressable>

            <Pressable style={styles.button}>
              <Ionicons name="logo-apple" size={26} color="#080B18" />
              <Text style={styles.buttonText}>Sign up with Apple</Text>
            </Pressable>

            <Pressable style={styles.button}>
              <Ionicons name="logo-google" size={26} color="#080B18" />
              <Text style={styles.buttonText}>Sign up with Google</Text>
            </Pressable>
          </View>

          <Text style={styles.footer}>
            Already have an account? <Text style={styles.green}>Log in</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080B18',
  },
  content: {
    flex: 1,
    paddingHorizontal: 22,
    paddingBottom: 28,
  },
  topSpacer: {
    flex: 0.35,
  },
  hero: {
    alignItems: 'center',
    gap: 59,
  },
  bottomBlock: {
    flex: 0.65,
    justifyContent: 'flex-end',
    gap: 28,
  },
  title: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 35,
    lineHeight: 62,
    fontFamily: 'Outfit_700Bold',
  },
  subtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 25,
    lineHeight: 31,
    fontFamily: 'Outfit_600SemiBold',
  },
  green: {
    color: '#B4F469',
  },
  buttons: {
    gap: 23,
  },
  button: {
    height: 42,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 23,
  },
  buttonText: {
    color: '#080B18',
    fontSize: 17,
    fontFamily: 'Outfit_500Medium',
  },
  footer: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Outfit_600SemiBold',
  },
});
