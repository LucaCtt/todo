import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import { Auth } from "aws-amplify";

import Navigation from "../components/Navigation";
import FormButton from "../components/FormButton";
import AuthForm from "../components/AuthForm";

export default SignInScreen = ({ navigation }) => {
  const signIn = async (email, password) => {
    await Auth.signIn(email, password);
  };

  const GoToSignUpButton = () => (
    <FormButton status="info" onPress={() => navigation.navigate("SignUp")}>
      <Text>Sign Up</Text>
    </FormButton>
  );

  return (
    <Navigation title="Sign In">
      <Card disabled style={styles.container}>
        <AuthForm
          submitText="Sign In"
          onSubmit={signIn}
          onSuccess={() => navigation.navigate("Home")}
        />
        <Text category="s1" style={styles.or}>
          - or -
        </Text>
        <GoToSignUpButton />
      </Card>
    </Navigation>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 14,
    flex: 1,
    padding: 10,
  },
  or: {
    textAlign: "center",
  },
});
