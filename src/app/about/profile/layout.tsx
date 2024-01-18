export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-center text-white">Title</h1>
      {children}
    </>
  );
}
