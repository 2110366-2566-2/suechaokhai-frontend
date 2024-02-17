import PropertyNavigationBar from "@/components/propertyDesc/PropertyNavigationBar";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <PropertyNavigationBar icon="w" feature="w" />
      {children}
    </div>
  );
}
