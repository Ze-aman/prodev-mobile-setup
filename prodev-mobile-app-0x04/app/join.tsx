import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { styles } from "@/styles/_joinstyle";

export default function Join() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Top Icons */}
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={26} />
          <Image source={require("@/assets/images/Logo.png")} />
        </View>

        {/* Title */}
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Create your</Text>
          <Text style={styles.titleText}>Account</Text>
          <Text style={styles.subText}>
            Fill in your details below to join.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.formGroup}>
          {/* Full Name */}
          <View>
            <Text style={styles.formLabel}>Full Name</Text>
            <TextInput style={styles.formControl} />
          </View>

          {/* Email */}
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>

          {/* Password */}
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                secureTextEntry
                style={styles.passwordControl}
              />
              <FontAwesome name="eye-slash" size={20} color="#7E7B7B" />
            </View>
          </View>
        </View>

        {/* Primary Button */}
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join Now</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Buttons */}
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/google.png")} />
            <Text style={styles.secondaryButtonText}>
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <Image source={require("@/assets/images/facebook.png")} />
            <Text style={styles.secondaryButtonText}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Sign In */}
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>
            Already have an account?
          </Text>
          <Text style={styles.signupSubTitleText}> Sign in</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
