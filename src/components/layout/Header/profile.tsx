import SignoutBtn from '@/components/buttons/SignoutBtn';
import { supabase } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: response, error } = await supabase.auth.getUser();

      if (error) {
        console.error('Error fetching user:', error);
        return;
      }

      if (response.user) {
        setUser(response.user);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className='flex flex-col w-full gap-4 border-t border-t-muted pt-4'>
      {user && (
        <div>
          <p className='text-muted-foreground'>
            You are logged in as: {user.user_metadata?.full_name || user.email}!
          </p>
        </div>
      )}
      <SignoutBtn />
    </div>
  );
}
