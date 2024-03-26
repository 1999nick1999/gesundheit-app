import Link from 'next/link'
import { Button } from "@/components/ui/button"
 
export default function NotFound() {
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <h2 className='text-fuchsia-900'>Not Found</h2>
      <p className='text-gray-500'>This page does not seem to be available</p>
      <Button className='mt-6'><Link href="/">Return Home</Link></Button>
    </div>
  )
}