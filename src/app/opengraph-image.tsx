import { ImageResponse } from "next/og";
import { profile } from "@/data";

export const alt = `${profile.short} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ededed",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#8b8b8b" }}>
          siddanth.dev
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, letterSpacing: "-0.03em" }}>
            {profile.short}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#8b8b8b" }}>
            {profile.role} at {profile.company}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#8b8b8b" }}>
          Go · Python · FastAPI · AWS · LLMs
        </div>
      </div>
    ),
    size
  );
}
