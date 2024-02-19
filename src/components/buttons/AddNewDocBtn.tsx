'use client';

import { useSession } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { PlusIcon } from 'lucide-react';
import { api } from '../../../convex/_generated/api';
import { Button } from '../ui/button';
import { SheetClose } from '../ui/sheet';

export default function AddNewDocBtn() {
  const { isSignedIn } = useSession();
  const createDocument = useMutation(api.documents.createDocument);

  return (
    { isSignedIn } && (
      <SheetClose asChild>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const title = 'untitled document';
            createDocument({
              title,
              content: '',
            });
          }}>
          <Button type='submit' className='flex gap-1 items-center w-full mb-6'>
            <PlusIcon size={18} />
            <span>New Document</span>
          </Button>
        </form>
      </SheetClose>
    )
  );
}
