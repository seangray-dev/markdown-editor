'use client';

import { supabase } from '@/utils/supabase/client';
import { GithubIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { Button } from '../ui/button';

export default function GitHubSignInBtn() {
  const signInWithGithub = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      redirect('/');
    }
  };

  return (
    <Button
      variant={'secondary'}
      className='flex items-center gap-2 rounded-md px-4 py-2 text-white mb-2 w-full'
      onClick={signInWithGithub}>
      <GithubIcon className='text-muted-foreground dark:text-white' />
      <span className='text-muted-foreground dark:text-white'>
        Sign in with GitHub
      </span>
    </Button>
  );
}
