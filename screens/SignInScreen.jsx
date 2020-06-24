import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text } from "@ui-kitten/components";

import Navigation from "../components/Navigation";
import SubmitButton from "../components/SubmitButton";
import AuthForm from "../components/AuthForm";
import useAuth from "../hooks/useAuth";
import { screens } from "../constants";
import { observer } from "mobx-react-lite";

const SignInScreen = ({ navigation }) => {
  const auth = useAuth();

  const signIn = async (email, password) => {
    await auth.signIn(email, password);
  };

  const GoToSignUpButton = () => (
    <SubmitButton
      status="info"
      onPress={() => navigation.navigate(screens.SIGN_UP)}
    >
      <Text>Sign Up</Text>
    </SubmitButton>
  );

  return (
    <Navigation title="Sign In">
      <Card disabled style={styles.container}>
        <AuthForm
          submitText="Sign In"
          onSubmit={signIn}
          onSuccess={() => navigation.navigate(screens.HOME)}
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

export default observer(SignInScreen);
