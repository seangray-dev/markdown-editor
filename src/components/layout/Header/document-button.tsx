import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { Document } from '@/lib/constants';
import { FileIcon } from 'lucide-react';

export const DocumentBtn: React.FC<Document> = ({ name, date }) => {
  return (
    <SheetClose asChild>
      <Button
        variant={'ghost'}
        className='flex gap-4 items-center justify-start w-full hover:bg-transparent group'>
        <FileIcon className='text-white' size={22} />
        <div className='flex flex-col gap-1 text-muted-foreground'>
          <span className='text-left'>{date}</span>
          <span className='text-white group-hover:text-primary duration-150 transition-all'>
            {name}
          </span>
        </div>
      </Button>
    </SheetClose>
  );
};
