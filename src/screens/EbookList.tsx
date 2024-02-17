import WrapEbookList from "@/components/WrapEbookList";
import { useListEBook } from "@/services/listEBook";
import { useEffect } from "react";

export default function EbookList() {
  const { loaded, loading, data, error, fetchData } = useListEBook();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    document.title = "E-Book list"; // TODO:: Temp mutate title
  }, []);

  return (
    <div className="lg:container mx-auto px-4 lg:px-0">
      {!error ? <WrapEbookList list={data} loading={loading} /> : null}
      {loaded && error ? (
        <p className="text-red-600 font-medium">{error}</p>
      ) : null}
    </div>
  );
}
