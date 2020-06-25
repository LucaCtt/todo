import React, { useState, memo } from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

/**
 * A form with inputs for email and password, and a submit button.
 *
 * @property {string} submitText - The text shown on the submit button.
 * @property {() => void} onSubmit - The function to be run on submit. Can be async: in that case the result
 *                                   will be awaited. Thrown errors will be shown in the form.
 */
const AuthForm = ({ submitText, onSubmit, ...props }) => {
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
      setLoading(false);
    }
  };

  return (
    <View {...props}>
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
      <SubmitButton
        disabled={email === "" || password === "" || loading}
        onPress={submit}
        isLoading={loading}
      >
        <Text>{submitText}</Text>
      </SubmitButton>
      {error !== "" && <Text status="danger">{error}</Text>}
    </View>
  );
};

export default memo(AuthForm);
