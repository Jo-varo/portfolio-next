'use client';

import { getLanguage } from '@/lib/language';
import { useEffect, useState } from 'react';

interface Props {
  name: { en: string; es: string };
  description: { en: string; es: string };
  className?: string;
}

export default function ProjectCardText({
  name,
  description,
  className,
}: Props) {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const newClasses = className ? ` ${className}` : '';

  useEffect(() => {
    setLanguage(getLanguage(navigator.language));
  }, []);

  return (
    <div className={`my-2${newClasses}`}>
      <h3 className="text-center font-bold text-xl text-orange-200">
        {name[language]}
      </h3>
      <p className="text-gray-300 font-lato">{description[language]}</p>
    </div>
  );
}
