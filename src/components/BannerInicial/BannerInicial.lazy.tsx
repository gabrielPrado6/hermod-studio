import React, { JSX, lazy, Suspense } from 'react';

const LazyBannerInicial = lazy(() => import('./BannerInicial'));

const BannerInicial = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBannerInicial {...props} />
  </Suspense>
);

export default BannerInicial;
