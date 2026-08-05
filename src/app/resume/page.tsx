import { redirect } from "next/navigation";
import { profile } from "@/data";

export default function ResumeRedirectPage() {
  redirect(profile.resume);
}
