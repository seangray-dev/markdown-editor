'use client';

import Header from '@/components/layout/Header/header';
import Editor from '@/components/layout/editor';
import Preview from '@/components/layout/preview';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState('');

  return (
    <main>
      <Header />
      {/* Toggle Section */}
      <div className='bg-background-muted dark:bg-popover text-muted-foreground py-3 px-4 flex justify-between items-center uppercase font-medium tracking-[2px]'>
        {showPreview ? (
          <p>Preview</p>
        ) : (
          <div className='flex-1 md:grid grid-cols-2'>
            <p className='md:hidden'>Markdown</p>
            {/* "Markdown" title for small screens */}
            <p className='hidden md:block'>Markdown</p>
            {/* "Markdown" title for medium and up screens */}
            <p className='hidden md:block ml-4'>Preview</p>
            {/* "Preview" title for medium and up screens */}
          </div>
        )}
        {showPreview ? (
          <EyeOffIcon
            className='h-6 w-6 text-muted-foreground cursor-pointer'
            onClick={() => setShowPreview(false)}
          />
        ) : (
          <EyeIcon
            className='h-6 w-6 text-muted-foreground cursor-pointer'
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
          <div
            className={`${
              showPreview ? 'md:col-span-2 mx-auto' : 'md:col-span-1'
            }`}>
            <Preview markdown={markdown} />
          </div>
        </div>
      </div>
    </main>
  );
}
