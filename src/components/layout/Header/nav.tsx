'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Document } from '@/lib/constants';
import { MenuIcon, PlusIcon } from 'lucide-react';
import React, { useState } from 'react';
import { ThemeToggle } from '../../ui/theme-toggle';
import { DocumentBtn } from './document-button';

export default function Nav() {
  const [documents, setDocuments] = useState<Document[]>([]);

  const addNewDocument = () => {
    const newDocument = {
      name: 'untitled-document.md',
      date: new Date().toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
    setDocuments([...documents, newDocument]);
  };

  return (
    <nav>
      <Sheet>
        <SheetTrigger className='bg-accent h-full p-4 md:p-7 flex justify-center items-center'>
          <MenuIcon className='text-white' />
        </SheetTrigger>
        <SheetContent
          className='flex flex-col bg-popover border-none py-7 px-6 h-screen'
          side={'left'}>
          <SheetHeader className='mb-7'>
            <SheetTitle className='uppercase text-white tracking-[5px]'>
              Markdown
            </SheetTitle>
            <SheetDescription className='uppercase font-bold tracking-[2px]'>
              my documents
            </SheetDescription>
          </SheetHeader>
          <SheetClose asChild>
            <Button
              type='submit'
              className='flex gap-1 items-center w-full mb-6'
              onClick={addNewDocument}>
              <PlusIcon size={18} />
              <span>New Document</span>
            </Button>
          </SheetClose>
          <ScrollArea className='flex-grow overflow-auto'>
            <div className='flex flex-col gap-7'>
              {documents.map((doc, index) => (
                <DocumentBtn key={index} name={doc.name} date={doc.date} />
              ))}
            </div>
          </ScrollArea>
          <SheetFooter className='self-start mt-4'>
            <ThemeToggle />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
