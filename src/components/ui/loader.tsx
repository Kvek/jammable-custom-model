export const LoaderIcon = (): JSX.Element => (
  <svg fill="none" height="80" viewBox="0 0 80 80" width="80" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`@keyframes partialCenterScaleWave {
    0 { transform: scaleY(1); }
    25% { transform: scaleY(1.25); }
    50% { transform: scaleY(.5); }
    75% { transform: scaleY(1.25); }
    100% { transform: scaleY(1); }
}

svg .one {
    animation: linear partialCenterScaleWave 1.2s infinite;
    animation-delay: calc(0.75s);
    transform-origin: center center;
    transform-box: fill-box;
}
svg .two {
    animation: linear partialCenterScaleWave 1.2s infinite;
    animation-delay: calc(0.85s);
    transform-origin: center center;
    transform-box: fill-box;
}
svg .three {
    animation: linear partialCenterScaleWave 1.2s infinite;
    animation-delay: calc(0.95s);
    transform-origin: center center;
    transform-box: fill-box;
}
svg .four {
    animation: linear partialCenterScaleWave 1.2s infinite;
    animation-delay: calc(1.05s);
    transform-origin: center center;
    transform-box: fill-box;
}

svg .five {
    animation: linear partialCenterScaleWave 1.2s infinite;
    animation-delay: calc(1.15s);
    transform-origin: center center;
    transform-box: fill-box;
}

svg .six {
    animation: linear partialCenterScaleWave 1.2s infinite;
    animation-delay: calc(1.25s);
    transform-origin: center center;
    transform-box: fill-box;
}`}
    </style>

    <path
      className="six"
      d="M67.5 35.02C67.5 33.5896 66.3807 32.43 65 32.43C63.6193 32.43 62.5 33.5896 62.5 35.02H67.5ZM62.5 42.49C62.5 43.9204 63.6193 45.08 65 45.08C66.3807 45.08 67.5 43.9204 67.5 42.49H62.5ZM62.5 35.02V42.49H67.5V35.02H62.5Z"
      fill="#F5A5D7"
    />
    <path
      className="five"
      d="M57.5 22.5701C57.5 21.1397 56.3807 19.98 55 19.98C53.6193 19.98 52.5 21.1397 52.5 22.5701H57.5ZM52.5 54.94C52.5 56.3704 53.6193 57.5301 55 57.5301C56.3807 57.5301 57.5 56.3704 57.5 54.94H52.5ZM52.5 22.5701V54.94H57.5V22.5701H52.5Z"
      fill="#F5A5D7"
    />
    <path
      className="four"
      d="M47.5 30.0401C47.5 28.6096 46.3807 27.45 45 27.45C43.6193 27.45 42.5 28.6096 42.5 30.0401H47.5ZM42.5 47.47C42.5 48.9004 43.6193 50.0601 45 50.0601C46.3807 50.0601 47.5 48.9004 47.5 47.47H42.5ZM42.5 30.0401V47.47H47.5V30.0401H42.5Z"
      fill="#F5A5D7"
    />
    <path
      className="three"
      d="M37.5 17.5901C37.5 16.1596 36.3807 15 35 15C33.6193 15 32.5 16.1596 32.5 17.5901H37.5ZM32.5 62.4099C32.5 63.8404 33.6193 65 35 65C36.3807 65 37.5 63.8404 37.5 62.4099H32.5ZM32.5 17.5901V62.4099H37.5V17.5901H32.5Z"
      fill="#F5A5D7"
    />
    <path
      className="two"
      d="M27.5 25.06C27.5 23.6296 26.3807 22.47 25 22.47C23.6193 22.47 22.5 23.6296 22.5 25.06H27.5ZM22.5 52.45C22.5 53.8804 23.6193 55.04 25 55.04C26.3807 55.04 27.5 53.8804 27.5 52.45H22.5ZM22.5 25.06V52.45H27.5V25.06H22.5Z"
      fill="#F5A5D7"
    />
    <path
      className="one"
      d="M17.5 35.02C17.5 33.5895 16.3807 32.43 15 32.43C13.6193 32.43 12.5 33.5895 12.5 35.02H17.5ZM12.5 42.49C12.5 43.9204 13.6193 45.08 15 45.08C16.3807 45.08 17.5 43.9204 17.5 42.49H12.5ZM12.5 35.02V42.49H17.5V35.02H12.5Z"
      fill="#F5A5D7"
    />
  </svg>
);
