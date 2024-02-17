export default function CardFooter() {
  return (
    <div className="flex flex-nowrap gap-2">
      <button className="w-3/4 bg-green-600 rounded py-3 font-semibold text-black">
        Pay
      </button>
      <button className="w-1/4 bg-inherit border rounded border-white py-3">
        Icon
      </button>
    </div>
  );
}
