import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, Icon, TopNavigationAction } from "@ui-kitten/components";
import { Auth } from "aws-amplify";

import Navigation from "../components/Navigation";
import AuthForm from "../components/AuthForm";
import ConfirmEmailForm from "../components/ConfirmEmailForm";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export default SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const signUp = async (email, password) => {
    await Auth.signUp(email, password);
  };

  const Wrapper = ({ children }) => (
    <Navigation title="Sign Up" accessoryLeft={BackAction}>
      <Card disabled style={styles.container}>
        {children}
      </Card>
    </Navigation>
  );

  if (!signedUp) {
    return (
      <Wrapper>
        <AuthForm
          submitText="Sign Up"
          onSubmit={signUp}
          onSuccess={(email) => {
            setEmail(email);
            setSignedUp(true);
          }}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <ConfirmEmailForm
          email={email}
          onSuccess={() => navigation.navigate("Home")}
        />
      </Wrapper>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    margin: 14,
    flex: 1,
    padding: 10,
  },
});
