import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default async function userGoogleLogin() {
  window.location.href = `${process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST}/api/v1/oauth/google`;
}
