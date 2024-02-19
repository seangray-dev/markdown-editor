'use client';

import { SignInButton, SignOutButton, useSession } from '@clerk/nextjs';
import { LogInIcon, LogOutIcon } from 'lucide-react';
import { Button } from '../ui/button';

export default function SignoutBtn() {
  const { isSignedIn } = useSession();

  return (
    <Button asChild className='p-0 h-full w-full'>
      {isSignedIn ? (
        <div className='h-full'>
          <SignOutButton>
            <div className='w-full justify-center cursor-pointer flex gap-2 h-full py-2 rounded-lg'>
              <LogOutIcon size={18} />
              <span>Logout</span>
            </div>
          </SignOutButton>
        </div>
      ) : (
        <div className='h-full'>
          <SignInButton>
            <div className='w-full justify-center border cursor-pointer flex gap-2 h-full py-2 '>
              <LogInIcon size={18} />
              <span>Login</span>
            </div>
          </SignInButton>
        </div>
      )}
    </Button>
  );
}
