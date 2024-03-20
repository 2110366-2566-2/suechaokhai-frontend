import PropertyNavigationBar from "@/components/property-description/PropertyNavigationBar";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <PropertyNavigationBar />
      <div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}