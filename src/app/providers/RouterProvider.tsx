import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs, Estates, Home, Room } from "@/pages";
import { Layout } from "./Layout";
import { NotFound } from "@/pages";

export const Routing: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estates" element={<Estates />} />
        <Route path="estates/:id" element={<Room />} />
        <Route path="about-us" element={<AboutUs />} />
      </Route>
      <Route path="not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
