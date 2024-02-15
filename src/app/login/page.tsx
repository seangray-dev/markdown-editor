import { AlertDestructive } from '@/components/alerts/AlertDestructive';
import GitHubSignInBtn from '@/components/buttons/GitHubSignInBtn';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect('/login?message=Invalid Credentials');
    }

    revalidatePath('/', 'layout');
    redirect('/');
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card className='flex-1 flex flex-col p-8 max-w-md justify-center'>
        <CardHeader className='p-0 mb-4'>
          <CardTitle>
            <h1 className='text-3xl font-bold'>Login</h1>
          </CardTitle>
        </CardHeader>
        <CardDescription className='mb-4'>
          <p>Add your details below to get back into the app</p>
        </CardDescription>
        <CardContent className='p-0'>
          <form
            className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground'
            action={signIn}>
            <Label className='text-md' htmlFor='email'>
              Email
            </Label>
            <Input
              className='rounded-md px-4 py-2 bg-inherit border mb-6'
              name='email'
              placeholder='you@example.com'
              required
            />
            <Label className='text-md' htmlFor='password'>
              Password
            </Label>
            <Input
              className='rounded-md px-4 py-2 bg-inherit border mb-6'
              type='password'
              name='password'
              placeholder='••••••••'
              required
            />
            {searchParams?.message && (
              <AlertDestructive message={searchParams.message} />
            )}
            <Button className='rounded-md px-4 py-2 text-foreground mb-2'>
              Sign In
            </Button>
          </form>
          <GitHubSignInBtn />
        </CardContent>
        <CardFooter className='p-0'>
          <div className='flex gap-1 mt-4 justify-center mx-auto'>
            <p>Don't have an account?</p>
            <Link
              className='hover:underline hover:text-primary duration-75 transition-all'
              href='/signup'>
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
