import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(140deg, #fff5ea 0%, #f8eadc 36%, #eac9b0 100%)",
          color: "#3d2518",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.95), transparent 18%), radial-gradient(circle at 78% 30%, rgba(255,221,188,0.88), transparent 20%), radial-gradient(circle at 58% 92%, rgba(122,77,49,0.18), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "76px",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontSize: 20,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(61,37,24,0.58)",
              }}
            >
              Preorder patisserie
            </div>
            <div
              style={{
                fontSize: 20,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgba(61,37,24,0.58)",
              }}
            >
              Kota Kinabalu
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 114, lineHeight: 0.9 }}>Creme Crust</div>
            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 34,
                lineHeight: 1.35,
                maxWidth: "760px",
                color: "rgba(61,37,24,0.8)",
              }}
            >
              Small-batch tartlets, craquelins, brownies, and soft-finish drops.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              fontFamily: "Arial, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.26em",
              fontSize: 20,
            }}
          >
            <div
              style={{
                padding: "14px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.68)",
                border: "1px solid rgba(61,37,24,0.12)",
              }}
            >
              Tartlets
            </div>
            <div
              style={{
                padding: "14px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.68)",
                border: "1px solid rgba(61,37,24,0.12)",
              }}
            >
              Craquelins
            </div>
            <div
              style={{
                padding: "14px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.68)",
                border: "1px solid rgba(61,37,24,0.12)",
              }}
            >
              Brownies
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
