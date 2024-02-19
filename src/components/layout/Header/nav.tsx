'use client';

import AddNewDocBtn from '@/components/buttons/AddNewDocBtn';
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
import { useQuery } from 'convex/react';
import { MenuIcon } from 'lucide-react';
import { Suspense } from 'react';
import { api } from '../../../../convex/_generated/api';
import { ThemeToggle } from '../../ui/theme-toggle';
import { DocumentBtn } from './document-button';
import Profile from './profile';

export default function Nav() {
  const documents = useQuery(api.documents.getDocumentsForUser);

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
            <AddNewDocBtn />
          </SheetClose>
          <ScrollArea className='flex-grow overflow-auto'>
            <div className='flex flex-col gap-7'>
              <Suspense fallback={<div>Loading...</div>}>
                {documents?.map((doc) => {
                  return <DocumentBtn key={doc._id} document={doc} />;
                })}
              </Suspense>
            </div>
          </ScrollArea>
          <SheetFooter className='self-start mt-4 w-full'>
            <div className='flex flex-col gap-2 w-full'>
              <ThemeToggle />
              <Profile />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
