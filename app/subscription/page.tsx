import { PricingTable } from "@clerk/nextjs";

export default function Subscription() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <PricingTable
        appearance={{
          variables: {
            colorPrimary: "#f97316", // orange-500 from Tailwind
            colorText: "#111827",
            colorBackground: "#ffffff",
          },
        }}
      />
    </main>
  );
}
