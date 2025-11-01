import Head from "next/head";
import axios from "axios";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Shop Online – Product Listing Page</title>
        <meta
          name="description"
          content="Browse trending products with filters, prices, and categories."
        />
      </Head>

      <Header />

      <main className="main">
        <h1 className="title">Product Listing</h1>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://fakestoreapi.com/products");
  return { props: { products: res.data } };
}