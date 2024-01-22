import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { CharacterDetails } from "../pages/characterDetails/characterDetails";
import { AppLayout } from "../layout/appLayout/appLayout";

export const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<CharacterDetails />} />
      </Route>
    </Routes>
  );
};
