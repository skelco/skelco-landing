import { useEffect } from "react";

export default function Footer() {
  // Inject JSON-LD (Breadcrumb) into <head>
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skelcoindustries.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://skelcoindustries.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Contact", "item": "https://skelcoindustries.com/contact" }
      ]
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer
      style={{ textAlign: "center", fontSize: "0.9rem", color: "#999", padding: "1rem 0" }}
    >
      &copy; {year} Skel Co Industries LLC — All Rights Reserved.
    </footer>
  );
}