import { AlertDestructive } from '@/components/alerts/AlertDestructive';
import { AlertSuccess } from '@/components/alerts/AlertSuccess';
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
import { cookies, headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function SignUp({
  searchParams,
}: {
  searchParams: {
    success?: string;
    error?: string;
  };
}) {
  const successMessage = searchParams?.success;
  const errorMessage = searchParams?.error;
  const signUp = async (formData: FormData) => {
    'use server';

    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirm-password') as string;

    if (password.length < 8) {
      return redirect(
        '/signup?error=Password must be at least 8 characters long'
      );
    }

    if (password !== confirmPassword) {
      return redirect('/signup?error=Passwords do not match');
    }
    
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect('/signup?error=Could not authenticate user');
    }

    return redirect('/signup?success=Check email to continue sign in process');
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Card className='flex-1 flex flex-col p-8 max-w-md justify-center'>
        <CardHeader className='p-0 mb-4'>
          <CardTitle>
            <h1 className='text-3xl font-bold'>Create account</h1>
          </CardTitle>
        </CardHeader>
        <CardDescription className='mb-4'>
          <p>Start your journey with us</p>
        </CardDescription>
        <CardContent className='p-0'>
          <form className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground'>
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
              Create Password
            </Label>
            <Input
              className='rounded-md px-4 py-2 bg-inherit border mb-6'
              type='password'
              name='password'
              placeholder='••••••••'
              required
            />
            <Label className='text-md' htmlFor='confirm-password'>
              Confirm Password
            </Label>
            <Input
              className='rounded-md px-4 py-2 bg-inherit border mb-6'
              type='password'
              name='confirm-password'
              placeholder='••••••••'
              required
            />
            {errorMessage && <AlertDestructive message={errorMessage} />}
            {successMessage && <AlertSuccess message={successMessage} />}
            <Button
              formAction={signUp}
              className='border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2'>
              Sign Up
            </Button>
          </form>
        </CardContent>
        <CardFooter className='p-0'>
          <div className='flex gap-1 mt-4 justify-center mx-auto'>
            <p>Already have an account?</p>
            <Link
              className='hover:underline hover:text-primary duration-75 transition-all'
              href='/login'>
              Log In
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
