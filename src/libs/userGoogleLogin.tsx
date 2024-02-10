import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default async function userGoogleLogin() {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   const response = await fetch("http://localhost:8000/api/v1/oauth/google", {
  //     method: "GET",
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch greeting");
  //   }

  window.location.href = "http://localhost:8000/api/v1/oauth/google";
}
