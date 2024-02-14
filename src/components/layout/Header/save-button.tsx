import { Button } from '@/components/ui/button';
import { SaveIcon } from 'lucide-react';

export default function SaveBtn() {
  return (
    <Button className='flex gap-2'>
      <span className='hidden md:block'>Save Changes</span>
      <SaveIcon />
    </Button>
  );
}
