import WrapEbookList from "@/components/WrapEbookList";
import { useListEBook } from "@/services/listEBook";
import { useEffect } from "react";

export default function EbookList() {
  const { loaded, loading, data, error, onStateFetching, setList } =
    useListEBook();

  useEffect(() => {
    async function fetchData() {
      onStateFetching(true, true, null);

      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_BASE_API_URL
          }/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book`
        );

        const result = await response.json();

        onStateFetching(false, true, null);
        setList(result.data);
      } catch (error) {
        onStateFetching(false, false, error as string);
      }
    }
    fetchData();
  }, [onStateFetching, setList]);

  return (
    <div className="lg:container mx-auto px-4 lg:px-0">
      {!error ? <WrapEbookList list={data} loading={loading} /> : null}
      {loaded && error ? (
        <p className="text-red-600 font-medium">{error}</p>
      ) : null}
    </div>
  );
}
