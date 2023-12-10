'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { languages } from '@/lib/constants';

export function LangSelect() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  let value = searchParams.get('lang') || languages['Any'];

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('lang', value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Select value={value} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([key, value]) => (
          <SelectItem key={key} value={value}>
            {key}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
