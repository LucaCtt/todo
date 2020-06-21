import React, { useState } from "react";
import { View } from "react-native";
import { Text, Spinner } from "@ui-kitten/components";

import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const LoadingIndicator = (props) => (
  <View {...props}>
    <Spinner />
  </View>
);

export default AuthForm = ({ submitText, onSubmit, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      await onSubmit(email, password);
      setLoading(false);
      onSuccess(email);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <FormInput
        autoFocus
        keyboardType="email-address"
        placeholder="Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <FormInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={(p) => setPassword(p)}
      />
      <FormButton
        disabled={email == "" || password == "" || loading}
        onPress={submit}
        accessoryLeft={loading ? LoadingIndicator : null}
      >
        <Text>{submitText}</Text>
      </FormButton>
      {error !== "" && <Text status="danger">{error}</Text>}
    </>
  );
};
