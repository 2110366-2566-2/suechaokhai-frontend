import PropertyNavigationBar from "@/components/property-description/PropertyNavigationBar";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <PropertyNavigationBar icon="w" feature="w" />
      <div>
        <div className="mt-20">{children}</div>
      </div>
    </div>
  );
}
