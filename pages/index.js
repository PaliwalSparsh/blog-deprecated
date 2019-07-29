import React from "react";
import HomePageLayout from "../components/layouts/HomePageLayout";

export const meta = {
  title: "Home - Disco's diary",
  tags: ["Next.js", "MDX"],
  layout: "page",
  publishDate: "2011-01-01",
  modifiedDate: false,
  seoDescription: "This is an about page."
};

function Home() {
  return (
    <div>
      <HomePageLayout />
    </div>
  );
}

export default Home;
