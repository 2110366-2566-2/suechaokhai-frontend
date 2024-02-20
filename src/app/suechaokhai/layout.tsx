import PropertyNavigationBar from "@/components/property-description/PropertyNavigationBar";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <PropertyNavigationBar icon="w" feature="w" />
      <div className="mt-20">{children}</div>
    </div>
  );
}
