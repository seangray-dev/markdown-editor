'use client';

import { Textarea } from '../ui/textarea';
export default function Editor({ markdown, setMarkdown }: any) {
  const handleChange = (e: any) => {
    setMarkdown(e.target.value);
  };

  return (
    <section className='h-full border-r'>
      <Textarea
        className='w-full h-full px-5 py-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none border-none'
        value={markdown}
        onChange={handleChange}
      />
    </section>
  );
}
