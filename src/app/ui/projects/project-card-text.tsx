'use client';

import { getLanguage } from '@/app/lib/language';
import { useEffect, useState } from 'react';

interface Props {
  name: { en: string; es: string };
  description: { en: string; es: string };
}

export default function ProjectCardText({ name, description }: Props) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');
  useEffect(() => {
    setLanguage(getLanguage(navigator.language));
  }, []);

  return (
    <div className="my-2">
      <h3 className="text-center font-bold text-xl text-orange-200">{name[language]}</h3>
      <p className="text-gray-300 font-lato">{description[language]}</p>
    </div>
  );
}
