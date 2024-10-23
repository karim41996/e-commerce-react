// import { Navbar, Main, Product, Footer } from "../components";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <Main />
//       <Product />
//       <Footer />
//     </>
//   )
// }

// export default Home

import { Main, Product } from "../components";
import Layout from "../components/Layout";

function Home() {
  return (
    <>
      <Layout>
        <Main />
        <Product />
      </Layout>
    </>
  )
}

export default Home