import { AdminHeader } from '@/components/shared'
import '../globals.css'
import type { Metadata } from 'next'
import { AOS } from '@/components/helpers/AOS'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '@/lib/Provider'
import { GET } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Admin | Gen X Store 2',
  description: 'One place for all luxurious scents and watches',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(GET)
  // @ts-ignore
  if(!session?.user) redirect("/login")


  return (
    <html lang="en">
      <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className='bg-bg'>
        <Provider>

          <AOS/>
          <ToastContainer/>
          <div>
          <AdminHeader/>
          </div>

          <div className='min-h-[100vh]'>
            {children}
          </div>
          
        </Provider>
      </body>
    </html>
  )
}
