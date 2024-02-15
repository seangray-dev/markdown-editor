import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export function AlertDestructive({ message }: { message: string }) {
  return (
    <Alert className='bg-destructive text-white'>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
