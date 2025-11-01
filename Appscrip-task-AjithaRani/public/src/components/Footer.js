// components/Footer.js
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Example Store — All rights reserved.</p>
      </div>
    </footer>
  );
}