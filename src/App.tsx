import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "@/screens/Landing";
import EBookDetails from "@/screens/EBookDetails";
import PageNotFound from "@/screens/PageNotFound";
import EbookList from "@/screens/EbookList";

import Layout from "@/components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/e-book" element={<EbookList />} />
          <Route path="/e-book/:id" element={<EBookDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
