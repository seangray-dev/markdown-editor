import { MailIcon } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export function AlertSuccess({ message }: { message: string }) {
  return (
    <Alert>
      <MailIcon className='h-4 w-4' />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
