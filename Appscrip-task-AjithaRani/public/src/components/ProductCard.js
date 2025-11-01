export default function ProductCard({ product }) {
  // SEO friendly alt text and simple slugified filename suggestion
  const alt = `${product.title} - ${product.category}`;

  return (
    <article className="product-card" role="article" aria-label={product.title}>
      <div className="product-media">
        <img src={product.image} alt={alt} className="product-img" loading="lazy" />
      </div>
      <div className="product-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description.slice(0, 90)}{product.description.length > 90 ? '...' : ''}</p>
        <div className="product-footer">
          <span className="product-price">₹{Math.round(product.price * 82)}</span>
          <button className="btn">Add</button>
        </div>
      </div>
    </article>
  );
}