export default function LoadingCircle() {
    return (
      <>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <div style={{
          backgroundColor: "#3498db",
          borderRadius: "50%",
          width: "120px",
          height: "120px",
          animation: "spin 2s linear infinite"
        }}></div>
      </>
    );
  }
  