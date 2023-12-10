'use client';

import { times } from '@/lib/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

export function TimeSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const value = searchParams.get('time') || String(times['Past Day']);

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('time', value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(times).map(([key, value]) => (
          <SelectItem key={key} value={String(value)}>
            {key}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
