import PropertyNavigationBar from "@/components/propertyDesc/PropertyNavigationBar";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <PropertyNavigationBar icon="w" feature="w" />
      <div className="mt-20 h-dvh">{children}</div>
    </div>
  );
}
