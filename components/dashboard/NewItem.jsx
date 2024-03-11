import CreateItemForm from '@/components/dashboard/CreateItemForm';
import FormHeader from '@/components/dashboard/FormHeader';
import { getData } from '@/lib/getData';
export default async function NewItem({initialData={},isUpdate=false}) {
 //Sequential fetching => waterfall
  const categoriesData = getData('categories');
  const unitsData = getData('units');
  const brandsData = getData('brands');
  const warehousesData = getData('warehouse');
  const suppliersData= getData('supplier');
  
  //Parallel fetching
  const [categories,units,brands,warehouses,suppliers] = 
  await Promise.all([
    categoriesData,
    unitsData,
    brandsData,
    warehousesData,
    suppliersData
  ])
  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate?"Update Item":"New Item"} href="/dashboard/inventory/items" />
      {/* Form */}
      <CreateItemForm
      categories={categories}
      units={units}
      brands={brands}
      warehouses={warehouses}
      suppliers={suppliers}
      initialData={initialData}
      isUpdate={isUpdate}
      />
    </div> 
  );
}
