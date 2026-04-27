import { DropTable } from '@/components/DropTable';

const Page = () => {
  return (
    <main className="py-container mx-auto flex w-full max-w-[1028px] flex-1 flex-col">
      <h2 className="mb-4 text-2xl font-bold">Drop Sources</h2>
      <DropTable className="min-h-[600px] flex-1" />
    </main>
  );
};

export default Page;
