import { Input } from '@/components/ui/input';
import { FileIcon } from 'lucide-react';

export default function FileNameInput() {
  return (
    <div className='flex items-center gap-4'>
      <FileIcon className='text-white' />
      <div className='flex flex-col gap-1'>
        <p className='hidden md:inline-flex text-muted-foreground'>
          Document Name
        </p>
        <Input
          placeholder='welcome.md'
          className='text-white rounded-none m-0 p-0 h-full bg-transparent border-b border-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2 focus:border-b-white hover:border-b-2 hover:border-b-white transition-all duration-75'
        />
      </div>
    </div>
  );
}
