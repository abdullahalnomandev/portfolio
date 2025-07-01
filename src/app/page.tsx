"use client";
import Banner from "@/components/Home/Banner";
import GetInTouch from "@/components/Home/GetInTouch";
import LatestPortfolio from "@/components/Home/LatestPortfolio";
import Skill from "@/components/Home/Skill";
import SomeBlogs from "@/components/Home/SomeBlogs";

const HomePage = () => {
  return (
    <>
      <Banner />
      <LatestPortfolio />
      <SomeBlogs />
      <Skill />
      <GetInTouch />
    </>
  );
};

export default HomePage;
