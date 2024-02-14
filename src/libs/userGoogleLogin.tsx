import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default async function userGoogleLogin() {
  window.location.href = "http://localhost:8000/api/v1/oauth/google";
}
