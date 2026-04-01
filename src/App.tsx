/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Since this is a single-file HTML project, we ensure the user sees the index.html content.
    // In this environment, index.html is served directly, but we can also render a simple message here
    // if the React app is mounted.
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a2e] text-white p-8 text-center">
      <div>
        <h1 className="text-4xl font-serif mb-4">Dr Afsan's Dental Aesthetics</h1>
        <p className="text-xl text-[#c9a96e]">Your Smile, Our Masterpiece</p>
        <p className="mt-8 text-sm opacity-50">Please view the index.html for the full website experience.</p>
      </div>
    </div>
  );
}
