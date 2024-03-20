export default function Message({ message }: { message: string[] }) {
  return (
    <div>
      {message[2] === "0" && (
        <div className="flex items-center justify-start">
          <div className="rounded-xl bg-ci-light-gray px-4 py-2">
            {message[1]}
          </div>
        </div>
      )}
      {message[2] === "1" && (
        <div className="flex items-center justify-end">
          <div className="rounded-xl bg-ci-light-gray px-4 py-2">
            {message[1]}
          </div>
        </div>
      )}
    </div>
  );
}
