import { PreviewImage } from '@/components/assets'
import Link from 'next/link'

interface IAssetPageProps {
  params: { token: string }
}

export default function AssetPage({ params }: IAssetPageProps) {
  const token = params.token
  return (
    <main className="container py-12 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="max-w-[32rem]">
          <div className="sticky top-32">
            <PreviewImage src="https://dovidka.biz.ua/wp-content/uploads/2014/02/h-ba-revut-voli-yak-yasla-povn-stor-ya-stvorennya-.jpg" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">
            Do Oxen Low when Mangers are Full?
          </h1>
          <p className="text-ellipsis truncate text-slate-500 mt-2">#{token}</p>

          <div className="flex flex-wrap gap-8 mt-12">
            <Link href="#">
              <button className="relative w-full md:w-auto p-6 font-semibold group text-black">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-cyan-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">OpenSea</span>
              </button>
            </Link>
            <Link href="#">
              <button className="relative w-full md:w-auto p-6 font-semibold group text-black">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-amber-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Rarible</span>
              </button>
            </Link>
            <Link href="#">
              <button className="relative w-full md:w-auto p-6 font-semibold group text-black">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-violet-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Etherscan</span>
              </button>
            </Link>
          </div>

          <h2 className="mt-8 block mb-2 text-lg font-bold">Description</h2>
          <p>
            Panas Myrny best-known work is the novel Khiba revut voly, yak yasla
            povni? (Do the Oxen Bellow, When Their Mangers Are Full?), that he
            coauthored with his brother, Ivan Rudchenko (also known as Ivan
            Bilyk). The work can be characterized as a sociopsychological
            novel-chronicle; it covers almost a century in the history of a
            Ukrainian village, from serfdom to the postreform era.
          </p>

          <div className="grid grid-cols-2 gap-12 mt-8">
            <div>
              <h2 className="block mb-2 text-lg font-bold">Type</h2>
              <p>Novel</p>
            </div>
            <div>
              <h2 className="block mb-2 text-lg font-bold">Author</h2>
              <p>Panas Myrny</p>
            </div>
          </div>
          <h2 className="mt-8 block mb-2 text-lg font-bold">External Link</h2>
          <a
            href="https://shron1.chtyvo.org.ua/Myrnyi/Do_oxen_low_when_mangers_are_full_anhl.pdf?PHPSESSID=jdah3ltqs1o185ojfeknp1e3a4"
            target="_blank"
            className="text-slate-500 hover:text-black hover:underline text-ellipsis truncate block"
          >
            https://shron1.chtyvo.org.ua/Myrnyi/Do_oxen_low_when_mangers_are_full_anhl.pdf?PHPSESSID=jdah3ltqs1o185ojfeknp1e3a4
          </a>
        </div>
      </div>
    </main>
  )
}
