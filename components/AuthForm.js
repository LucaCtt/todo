import React, { useState, memo } from "react";
import { Text } from "@ui-kitten/components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";
import LoadingIndicator from "./LoadingIndicator";

const AuthForm = ({ submitText, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);
    try {
      await onSubmit(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
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
        disabled={email === "" || password === "" || loading}
        onPress={submit}
        accessoryLeft={loading ? LoadingIndicator : null}
      >
        <Text>{submitText}</Text>
      </FormButton>
      {error !== "" && <Text status="danger">{error}</Text>}
    </>
  );
};

export default memo(AuthForm);
