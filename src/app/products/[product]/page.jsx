export default async function Product({ params }) {
  const param = await params;

  return (
    <>
      <h1>Product {param.product} </h1>
    </>
  );
}
