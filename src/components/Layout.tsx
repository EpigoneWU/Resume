// src/components/Layout.tsx
export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col min-h-dvh">
      {children}
    </div>
  );
}
