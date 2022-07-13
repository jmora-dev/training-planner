import { useEffect } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Logout() {
  const { signOut } = useLogin();
  useEffect(() => signOut());
  return null;
}
