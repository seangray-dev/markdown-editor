'use client';

import { Roboto_Mono } from 'next/font/google';
import { Textarea } from '../ui/textarea';

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Editor({ markdown, setMarkdown }: any) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  return (
    <section className='h-full border-r'>
      <Textarea
        className={`${robotoMono.className} leading-6 resize-none h-full px-5 py-4 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none border-none`}
        value={markdown}
        onChange={handleChange}
      />
    </section>
  );
}
