export const createKPatternSVG = ({
  strokeColor = "#645741",
  fillColor = "rgba(60, 47, 25, 0.08)",
  fontSize = "80px",
  strokeWidth = "1.5",
  fontFamily = "Imprint MT Shadow", // Corrected font name
}) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <text x="40" y="40" transform="scale(-1, 1) translate(-80, 0)" 
        style="font-size: ${fontSize}; 
               fill: ${fillColor}; 
               stroke: ${strokeColor}; 
               stroke-width: ${strokeWidth}; 
               text-anchor: middle; 
               dominant-baseline: middle;
               font-family: '${fontFamily}', serif;">K</text>
      <text x="120" y="40" 
        style="font-size: ${fontSize}; 
               fill: ${fillColor}; 
               stroke: ${strokeColor}; 
               stroke-width: ${strokeWidth}; 
               text-anchor: middle; 
               dominant-baseline: middle;
               font-family: '${fontFamily}', serif;">K</text>
      <text x="40" y="120" transform="scale(-1, 1) translate(-80, 0)" 
        style="font-size: ${fontSize}; 
               fill: ${fillColor}; 
               stroke: ${strokeColor}; 
               stroke-width: ${strokeWidth}; 
               text-anchor: middle; 
               dominant-baseline: middle;
               font-family: '${fontFamily}', serif;">K</text>
      <text x="120" y="120" 
        style="font-size: ${fontSize}; 
               fill: ${fillColor}; 
               stroke: ${strokeColor}; 
               stroke-width: ${strokeWidth}; 
               text-anchor: middle; 
               dominant-baseline: middle;
               font-family: '${fontFamily}', serif;">K</text>
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
