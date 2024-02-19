import SignoutBtn from '@/components/buttons/SignOutBtn';

export default function Profile() {
  return (
    <div className='flex flex-col w-full gap-4 border-t border-t-muted pt-4'>
      {/* {user && (
        <div>
          <p className='text-muted-foreground'>
            You are logged in as: {user.user_metadata?.full_name || user.email}!
          </p>
        </div>
      )} */}
      <SignoutBtn />
    </div>
  );
}
