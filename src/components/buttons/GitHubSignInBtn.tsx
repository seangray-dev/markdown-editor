import { createClient } from '@/utils/supabase/server';
import { GithubIcon } from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Button } from '../ui/button';

export default async function GitHubSignInBtn() {
  const signInWithGithub = async () => {
    'use server';
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Directly await the promise without try-catch
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });

    // Check for errors and return accordingly
    if (error) {
      console.error('Error logging in:', error);
      return { success: false, message: 'Could not authenticate with GitHub' };
    }

    redirect(data.url!);
  };

  return (
    <form>
      <Button
        formAction={signInWithGithub}
        variant={'secondary'}
        className='flex items-center gap-2 rounded-md px-4 py-2 text-white mb-2 w-full'>
        <GithubIcon className='text-muted-foreground dark:text-white' />
        <span className='text-muted-foreground dark:text-white'>
          Sign in with GitHub
        </span>
      </Button>
    </form>
  );
}
