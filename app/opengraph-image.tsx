import { ImageResponse } from "next/og";

export const alt = "Cockroach Janta Parti — Main Bhi Cockroach";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          padding: 60,
        }}
      >
        <div style={{ fontSize: 200, marginBottom: 20 }}>🪳</div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#FFD60A",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          MAIN BHI
        </div>
        <div
          style={{
            fontSize: 120,
            fontWeight: 900,
            color: "#F5F5F5",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: -3,
            marginTop: 10,
          }}
        >
          COCKROACH.
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#A0A0A0",
            marginTop: 40,
            textAlign: "center",
          }}
        >
          India&apos;s loudest Gen Z movement · cockrochjantaparti.com
        </div>
      </div>
    ),
    { ...size }
  );
}
