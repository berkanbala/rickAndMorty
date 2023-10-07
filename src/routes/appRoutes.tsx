import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { CharacterDetails } from "../pages/characterDetails/characterDetails";
import { NotFound } from "../pages/notFound/notFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details:id" element={<CharacterDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
