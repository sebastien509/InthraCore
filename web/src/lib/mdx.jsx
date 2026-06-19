import React from 'react';
import { MDXProvider as Provider } from '@mdx-js/react';

const A  = (props) => <a {...props} className="underline hover:no-underline" />;
const H2 = (p) => <h2 {...p} className="mt-10 text-2xl font-bold" />;
const P  = (p) => <p {...p} className="leading-7 my-4" />;
const LI = (p) => <li {...p} className="ml-6 list-disc" />;

const components = { a: A, h2: H2, p: P, li: LI };

export const MDXProvider = ({ children }) => (
  <Provider components={components}>{children}</Provider>
);
