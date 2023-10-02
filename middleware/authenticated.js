import * as SecureStore from "expo-secure-store";

export const isAuthuenticated = async () => {
  try {
    const token = await SecureStore.getItemAsync("secure_token");
    console.log(token);
    if (token) return true;
    return false;
  } catch (e) {
    return false;
  }
};
