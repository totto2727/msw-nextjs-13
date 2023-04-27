export const revalidate = 0;

export default async function Home() {
  const res = await fetch("https://my.backend/book");
  const book = await res.json();

  if (!book) return <div>loading</div>;
  return (
    <div>
      <img src={book.imageUrl} alt={book.title} width="250" />
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
}
