export default function FurnishingButton({ furnishing, label, tag, onClick }) {
  return (
    <button
      className={`rounded-md bg-white px-20 py-2 outline outline-1 outline-ci-gray hover:bg-ci-dark-gray ${
        furnishing === tag ? "bg-ci-black text-white" : "bg-white text-gray-700"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
