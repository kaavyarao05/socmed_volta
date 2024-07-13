"use client";
import { usePathname } from "next/navigation";



function header(){
    const username=usePathname().split('/')[2];
    return(
      <>
      <header class='w-full max-h-28 px-10 pb-8 mx-auto rounded-b-lg bg-white shadow-md'>
          <div class='text-base pt-4 leading-3 background bg-white mx-auto space-y-6'>
            <button onClick={() => window.location.href="../../.."} class="bg-transparent hover:bg-orange-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded">
            Go Home
            </button>
            <h1 class="flex items-center justify-center text-2xl font-bold text-black">{username}'s Profile</h1>
            
          </div>
      </header>
      </>
  
    )
  }

function footer(){
  const username=usePathname().split('/')[2];
  return(
    <>
    <footer class='fixed bottom-0 w-full max-h-24 px-10 py-3 pb-5 mx-auto rounded-t-lg bg-white shadow-xl'>
        <div class='leading-3 mx-auto space-y-3'>
          <h1 class="text-lg font-bold text-black">You are currently visiting {username}'s profile</h1>
        </div>
    </footer>
    </>
  )
}

export default function Post() {
const pathname = usePathname().split()[2];
return (
    <div class='min-h-screen from-emerald-400 via-amber-300 to-orange-400 bg-gradient-to-r'>
    {header()}
    <div class=''>
      <h2 class="text-center py-5 text-black">This user has not posted anything</h2>
    </div>
    {footer()}
    </div>
); 

}
