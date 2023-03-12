// Link util: https://blog.logrocket.com/debugging-react-performance-issues-with-why-did-you-render/
import React from 'react';

if (process.env.REACT_APP_ENV === 'development') {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
