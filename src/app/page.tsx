'use client';

import Editor from '@/components/layout/editor';
import Preview from '@/components/layout/preview';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('');

  return (
    <main>
      {/* Toggle Button for all screen sizes */}
      <div className='bg-gray-100 p-2 flex justify-between items-center'>
        {showPreview ? (
          <EyeOffIcon
            className='h-6 w-6 text-gray-700 cursor-pointer'
            onClick={() => setShowPreview(false)}
          />
        ) : (
          <EyeIcon
            className='h-6 w-6 text-gray-700 cursor-pointer'
            onClick={() => setShowPreview(true)}
          />
        )}
      </div>

      {/* Conditional Rendering based on toggle */}
      <div className='min-h-screen'>
        {/* Mobile: Show Editor or Preview based on toggle */}
        <div className={`md:hidden ${showPreview ? 'block' : 'hidden'}`}>
          <Preview markdown={markdown} />
        </div>
        <div className={`md:hidden ${showPreview ? 'hidden' : 'block'}`}>
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </div>

        {/* Medium screens and up: show both editor and preview or only preview */}
        <div className='hidden md:grid md:grid-cols-2 min-h-screen'>
          {!showPreview && (
            <Editor markdown={markdown} setMarkdown={setMarkdown} />
          )}
          <div className={`${showPreview ? 'md:col-span-2' : 'md:col-span-1'}`}>
            <Preview markdown={markdown} />
          </div>
        </div>
      </div>
    </main>
  );
}
