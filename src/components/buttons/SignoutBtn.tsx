'use client';

import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/client';
import { LogOutIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function SignoutBtn() {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    redirect('/login');
  };

  return (
    <form className='w-full text-white'>
      <Button
        className='w-full flex gap-2 items-center'
        formAction={handleSignOut}>
        <LogOutIcon size={18} />
        Signout
      </Button>
    </form>
  );
}
