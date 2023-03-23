import { getOptionsForVote } from '@/services/getRandomPokemon';
import { trpc } from '@/utils/trpc';
import { useEffect, useState } from 'react';

export default function Home() {
  const [[first, second], setIds] = useState<number[]>([0, 0]);

  useEffect(() => {
    setIds(getOptionsForVote());
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokemon is rounder?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex items-center justify-between max-w-2xl">
        <div className="w-16 h-16 bg-red-200">{first}</div>
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-200">{second}</div>
      </div>
    </div>
  );
}
