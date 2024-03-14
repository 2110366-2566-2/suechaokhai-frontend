import PropertyNavigationBar from "@/components/property-description/PropertyNavigationBar";

export default function Suechaokhai({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<<<<<<< HEAD
    <div className="">
      <PropertyNavigationBar />
      <div>
        <div className="">{children}</div>
      </div>
=======
    <div className="flex flex-col">
      <PropertyNavigationBar icon="w" feature="w" />
      <div className="mt-20 h-dvh">{children}</div>
>>>>>>> 9b9102f7735205ca6346bc5a8ecf19f315514ff4
    </div>
  );
}
