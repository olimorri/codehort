import React from 'react';
import Lottie, { Options } from 'react-lottie';

export default function LottieAnimation({
  lotti,
  width,
  height,
}: {
  lotti: unknown;
  width: number;
  height: number;
}): JSX.Element {
  const defaultOptions: Options = {
    loop: false,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
