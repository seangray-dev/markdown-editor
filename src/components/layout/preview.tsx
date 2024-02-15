import Markdown from 'markdown-to-jsx';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

type PreviewProps = {
  markdown: string;
};

export default function Preview({ markdown }: PreviewProps) {
  return (
    <section
      className={`custom-bullets text-sm px-5 py-4 prose max-w-none prose-stone prose-md dark:prose-invert prose-h1:text-[32px] prose-h2:font-light prose-h2:text-[28px] prose-h3:text-[24px] prose-h4:text-[20px] prose-h5:text-[16px] prose-p:leading-6 prose-h5:font-bold prose-h6:text-primary prose-h6:font-bold ${robotoSlab.className}`}>
      <Markdown>{markdown}</Markdown>
    </section>
  );
}
