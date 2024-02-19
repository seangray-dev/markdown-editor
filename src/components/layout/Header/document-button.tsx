'use client';

import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { formatRelative, subDays } from 'date-fns';
import { FileIcon } from 'lucide-react';

export const DocumentBtn = ({ document }: { document: any }) => {
  const formattedDate = formatRelative(
    subDays(new Date(document.lastModified), 0),
    new Date()
  );

  return (
    <div key={document._id}>
      <SheetClose>
        <Button
          variant={'ghost'}
          className='flex gap-4 items-center justify-start w-full hover:bg-transparent group'>
          <FileIcon className='text-white' size={22} />
          <div className='flex flex-col gap-1 text-muted-foreground'>
            <span className='text-left capitalize'>{formattedDate}</span>
            <span className='text-white group-hover:text-primary duration-150 transition-all'>
              {document.title}
            </span>
          </div>
        </Button>
      </SheetClose>
    </div>
  );
};
