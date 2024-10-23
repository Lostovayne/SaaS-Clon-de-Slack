'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuthActions } from '@convex-dev/auth/react';
import { Loader, LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCurrentUser } from '../hooks/use-current-user';

export const UserButton = () => {
  const { data, isLoading } = useCurrentUser();
  const { signOut } = useAuthActions();
  const router = useRouter();

  if (isLoading) {
    return <Loader className='size-4 animate-spin text-muted-foreground' />;
  }

  if (!data) {
    return null;
  }

  const { image, name, email } = data;

  const avatarFallback = name!.charAt(0).toUpperCase();

  const logOut = async (): Promise<void> => {
    await signOut();
    router.push('/auth');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className='size-10 hover:opacity-75 transition'>
          <AvatarImage alt={name} src={image} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' side='right' className='w-60'>
        <DropdownMenuItem onClick={logOut} className='h-10'>
          <LogOutIcon className='mr-2 size-4' />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
