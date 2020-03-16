import React from 'react'

const LoadingIndicator = ({width = 100, heigth = 100}) => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{
    margin: 'auto',  
    display: 'block', 
    shapeRendering: 'auto', 
    width: "200px", 
    height: "200px", 
    viewBox: "0 0 100 100", 
    preserveAspectRatio: "xMidYMid"
    }}>
<g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.4204892966360857s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.3822629969418961s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.34403669724770647s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.30581039755351686s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.26758409785932724s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.22935779816513766s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.19113149847094804s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.15290519877675843s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.11467889908256883s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.07645259938837921s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="-0.03822629969418961s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#000000">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.4587155963302753s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
</svg>
    )
}

export default LoadingIndicator