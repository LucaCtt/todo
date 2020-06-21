import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction } from "@ui-kitten/components";
import { Auth } from "aws-amplify";

import Navigation from "../components/Navigation";
import AuthForm from "../components/AuthForm";
import ConfirmUserForm from "../components/ConfirmUserForm";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const signUp = async (email, password) => {
    await Auth.signUp(email, password);
    setEmail(email);
    setSignedUp(true);
  };

  const verifyUser = async (code) => {
    await Auth.confirmSignUp(email, code);
    navigation.navigate("Home");
  };

  return (
    <Navigation title="Sign Up" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        {signedUp ? (
          <ConfirmUserForm
            email={email}
            onResend={() => Auth.resendSignUp(email)}
            onSubmit={verifyUser}
          />
        ) : (
          <AuthForm submitText="Sign Up" onSubmit={signUp} />
        )}
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
});
