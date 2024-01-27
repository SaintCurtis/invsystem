import CreateItemForm from '@/components/dashboard/CreateItemForm';
import FormHeader from '@/components/dashboard/FormHeader';
import { getData } from '@/lib/getData';
export default async function NewItem() {
  const categories = await getData('categories');
  const units = await getData('units');
  const brands = await getData('brands');
  const warehouses = await getData('warehouse');
  const suppliers= await getData('supplier');
  
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Item" href="/dashboard/inventory" />
      {/* Form */}
      <CreateItemForm categories={categories} units={units} brands={brands} warehouses={warehouses} suppliers={suppliers} />
    </div>
  );
}
