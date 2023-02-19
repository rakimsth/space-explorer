import { useAuth } from "@arcana/auth-react";

function useArcanaAuth() {
  const auth = useAuth();

  const socialLogin = async (socialType) => {
    await auth.loginWithSocial(socialType);
  };
  const loginWithMagicLink = async (email) => {
    await auth.loginWithLink(email);
  };

  const isLoggedIn = async () => {
    return await auth.isLoggedIn();
  };

  const logout = async () => {
    return await auth.logout();
  };

  const getAccounts = async () => {
    return await auth.provider.request({ methods: "eth_accounts" });
  };

  return {
    loginWithMagicLink,
    socialLogin,
    logout,
    getAccounts,
    isLoggedIn,
  };
}

export default useArcanaAuth;
