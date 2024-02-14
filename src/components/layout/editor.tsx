'use client';

import { Textarea } from '../ui/textarea';
export default function Editor({ markdown, setMarkdown }: any) {
  const handleChange = (e: any) => {
    setMarkdown(e.target.value);
  };

  return (
    <section className='bg-background h-full'>
      <h2>Editor</h2>
      <textarea
        className='w-full h-full'
        value={markdown}
        onChange={handleChange}
      />
    </section>
  );
}
