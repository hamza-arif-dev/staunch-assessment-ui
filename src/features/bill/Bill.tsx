import { BillLayout } from "./layout/BillLayout";
import { BillProvider } from "./context";

export function Bill() {
  return (
    <BillProvider>
      <BillLayout />
    </BillProvider>
  );
}
