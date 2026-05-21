import { ImageResponse } from "next/og";

export const alt = "Cockroach Janta Parti — Main Bhi Cockroach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 200 }}>🪳</div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            color: "#FFD60A",
            letterSpacing: -3,
          }}
        >
          MAIN BHI COCKROACH.
        </div>
        <div style={{ fontSize: 32, color: "#A0A0A0", marginTop: 30 }}>
          #MainBhiCockroach
        </div>
      </div>
    ),
    { ...size }
  );
}
