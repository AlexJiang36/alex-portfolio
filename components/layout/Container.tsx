type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {children}
    </main>
  );
}