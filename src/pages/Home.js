import React from 'react';
import Layout from "../components/Layout";
import HomeBody from "../components/HomeBody";
import HomeSideBar from "../components/HomeSideBar";

function Home() {
  return (
      <Layout>
          <HomeSideBar/>
          <HomeBody />
      </Layout>
  );
}
export default Home;
