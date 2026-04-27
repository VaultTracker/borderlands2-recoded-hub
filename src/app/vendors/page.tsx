import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ACCESSORIES, HYBRID_ACCESSORIES } from '@/constants/vendors';

const Page = () => {
  return (
    <main className="py-container mx-auto max-w-4xl space-y-6">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Accessories</h2>
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="text-center">Accessory</TableHead>
              <TableHead className="text-center">Weapon Type</TableHead>
              <TableHead>Effect</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-card">
            {ACCESSORIES.map((accessory) => (
              <TableRow key={accessory.accessory}>
                <TableCell className="text-center">{accessory.accessory}</TableCell>
                <TableCell className="text-center">{accessory.weaponType}</TableCell>
                <TableCell>
                  <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: accessory.effect }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Hybrid List</h2>
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="text-center">Original Item</TableHead>
              <TableHead className="text-center">Item Type</TableHead>
              <TableHead className="text-center">Part Type</TableHead>
              <TableHead>Hybrid Effect</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-card">
            {HYBRID_ACCESSORIES.map((hybrid) => (
              <TableRow key={hybrid.originalItem}>
                <TableCell className="text-center">{hybrid.originalItem}</TableCell>
                <TableCell className="text-center">{hybrid.itemType}</TableCell>
                <TableCell className="text-center">{hybrid.partType}</TableCell>
                <TableCell>
                  <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: hybrid.hybridEffect }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
};

export default Page;
