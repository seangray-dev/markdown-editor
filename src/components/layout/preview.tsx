import Markdown from 'markdown-to-jsx';

export default function Preview({ markdown }: any) {
  return (
    <section className='px-5 py-4'>
      <Markdown>{markdown}</Markdown>
    </section>
  );
}
