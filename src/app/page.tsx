import { SignInButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='h-screen'>
      <SignInButton />
    </div>
  );
}
