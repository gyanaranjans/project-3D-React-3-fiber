import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
//     <div style={{
//       position: relative;
//       width: 300px;
//       height: 300px;
//       display: block;
//       transform-style: preserve-3d;
//       transform: rotateX(-20deg);
//     }}>
//     <div class="wrapper">
//     <span class="side side1"></span>
//     <span class="side side2"></span>
//     <span class="side side3"></span>
//     <span class="side side4"></span>
//     <span class="shadow"></span>
//   </div>  
// </div>
//   .pyramid-loader {
//     position: relative;
//     width: 300px;
//     height: 300px;
//     display: block;
//     transform-style: preserve-3d;
//     transform: rotateX(-20deg);
//   }
  
//   .wrapper {
//     position: relative;
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//     animation: spin 4s linear infinite;
//   }
  
//   @keyframes spin {
//     100% {
//       transform: rotateY(360deg);
//     }
//   }
  
//   .pyramid-loader .wrapper .side {
//     width: 70px;
//     height: 70px;
//   /* you can choose any gradient or color you want */
//     background: linear-gradient( #FEDB37 10%, #FDB931 70%, #9f7928 120%, #8A6E2F 130%);
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     margin: auto;
//     transform-origin: center top;
//     clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
//   }
  
//   .pyramid-loader .wrapper .side1 {
//     transform: rotateZ(-30deg) rotateY(90deg);
//   }
  
//   .pyramid-loader .wrapper .side2 {
//     transform: rotateZ(30deg) rotateY(90deg);
//   }
  
//   .pyramid-loader .wrapper .side3 {
//     transform: rotateX(30deg);
//   }
  
//   .pyramid-loader .wrapper .side4 {
//     transform: rotateX(-30deg);
//   }
  
//   .pyramid-loader .wrapper .shadow {
//     width: 65px;
//     height: 65px;
//     background: #9f7928;
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     margin: auto;
//     transform: rotateX(90deg) translateZ(-40px);
//     filter: blur(12px);
//   }
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
