import DeleteBtn from './delete-button';
import FileNameInput from './file-name-input';
import Nav from './nav';
import SaveBtn from './save-button';

export default function Header() {
  return (
    <header className='flex items-center justify-between bg-muted'>
      <div className='flex items-center gap-8'>
        <div className='flex gap-2 h-[56px] w-[56px] md:h-[72px] md:w-[72px]'>
          <Nav />
        </div>
        <div className='flex items-center'>
          <div className='hidden 2xl:inline-flex font-bold uppercase tracking-[5px] border-r border-r-muted-foreground pr-7 mr-7 text-white'>
            Markdown
          </div>
          <FileNameInput />
        </div>
      </div>
      <div className='flex items-center gap-6 p-2 md:p-4'>
        <DeleteBtn />
        <SaveBtn />
      </div>
    </header>
  );
}
