import { ExternalLinkIcon } from 'lucide-react';
import { BASE_PATH } from '~/next.config';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 py-24">
      <img src={`${BASE_PATH}/images/logo.webp`} alt="Borderlands 2 Recoded Hub " className="h-48 object-contain" />
      <h1 className="text-3xl font-bold">
        <incendiary>Borderlands 2 Recoded Hub</incendiary>
      </h1>
      <ul className="flex flex-col items-center justify-center gap-1">
        <li>
          <a href="https://www.nexusmods.com/borderlands2/mods/517" target="_blank" rel="noopener noreferrer">
            <Button variant="link">
              Mode Link <ExternalLinkIcon />
            </Button>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1GK2woOlIG0g2jDkiF_BkqdIiQmCtJ5h2jNTAEi-3nrs/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="link">
              Official Full Changelog <ExternalLinkIcon />
            </Button>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/spreadsheets/d/1pobNhbAT0-ewvvBKtcrdal9swc8ihKLkLyacDoK41_Q/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="link">
              Gear & Skill Trees Docs <ExternalLinkIcon />
            </Button>
          </a>
        </li>
      </ul>
    </main>
  );
}
