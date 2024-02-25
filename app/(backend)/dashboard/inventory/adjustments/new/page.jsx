import AdjustmentForm from '@/components/dashboard/AdjustmentForm';
import { getData } from '@/lib/getData';
export default async function NewAdjustments() {
const items = await getData('items');
const warehouses = await getData('warehouse');
  return (
    <AdjustmentForm items={items} warehouses={warehouses} />
    )
}
