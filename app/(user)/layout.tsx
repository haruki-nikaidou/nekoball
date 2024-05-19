import UserNav from "@/components/nav/UserNav";

export default function UserLayout({children}: { children: React.ReactNode }) {
  return (
      <>
        <UserNav/>
        <main className='container max-w-7xl mx-auto p-4'>
          {children}
        </main>
      </>
  );
}