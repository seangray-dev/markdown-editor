import Markdown from 'markdown-to-jsx';

export default function Preview({ markdown }: any) {
  return (
    <section className='bg-blue-400 h-full prose'>
      <Markdown>{markdown}</Markdown>
    </section>
  );
}
