export const metadata = {
  title: "Learn NextJs",
  description: "Generated by create next app",
};

export default function ProductsLayout({ children }) {
  return (
    <section>
      <h1>I am Dynamic Product Layout.jsx</h1>
      {children}
    </section>
  );
}
