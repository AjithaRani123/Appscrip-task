export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/images/hero-plp-banner.jpg" alt="Example Store banner" className="brand-img" />
          <span className="brand-title">Example Store</span>
        </div>

        <div className="header-actions">
          <input aria-label="Search products" className="search" placeholder="Search products..." />
        </div>
      </div>
    </header>
  );
}