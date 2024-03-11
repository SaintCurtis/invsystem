import AdjustmentForm from '@/components/dashboard/AdjustmentForm';
import { getData } from '@/lib/getData';
export default async function NewAdjustments() {
const itemsData = await getData('items');
const warehousesData = await getData('warehouse');
const suppliersData = await getData('supplier');
const [items, warehouses,supplier] = await Promise.all([
  itemsData,
  warehousesData,
suppliersData
])
  return (
    <AdjustmentForm items={items} supplier={supplier} warehouses={warehouses} />
    )
}
