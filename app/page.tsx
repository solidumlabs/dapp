import { HomePageHashResolver } from '@/components/assets'
import { Header, SolidumIcon } from '@/components/base'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="container">
        <section className="mb-24 mt-4">
          <div className="grid xl:grid-cols-2 gap-24 mb-24">
            <div>
              <div className="mb-8 divide-y">
                <h1 className="text-3xl font-bold pb-3">Solidum Assets</h1>
                <p className="lg:inline-block pt-3 text-gray-500">
                  Create Assets from Anything
                </p>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                Finaly Anything can become your NFT Asset
              </h1>
              <p className="text-gray-500 mb-8">
                Easy-to-use cards, spend limits, approval flows, vendor
                payments, and more—plus an average savings of 3.5%.
              </p>
              <div className="md:flex gap-4">
                <button className="p-6 w-full md:w-auto bg-black text-white font-semibold">
                  Create Asset
                </button>
                <button className="p-6 w-full md:w-auto flex gap-3 font-semibold justify-center">
                  <span>Learn more</span>
                  <i className="material-symbols-sharp">
                    keyboard_double_arrow_down
                  </i>
                </button>
              </div>
            </div>
            <HomePageHashResolver />
          </div>

          <div className="bg-gray-100 p-10 grid gap-10 grid-cols-2 md:grid-cols-4 justify-items-center items-center">
            <Image
              src="/metamask.svg"
              alt="metamask"
              width="0"
              height="0"
              className="w-auto md:p-6"
            />
            <Image
              src="/opensea.svg"
              alt="opensea"
              width="0"
              height="0"
              className="w-auto md:p-6"
            />
            <Image
              src="/rarible.svg"
              alt="sd"
              width="0"
              height="0"
              className="w-auto md:p-6"
            />
            <Image
              src="/ethereum.svg"
              alt="sd"
              width="0"
              height="0"
              className="w-auto md:p-6"
            />
          </div>
        </section>

        <section className="mb-24">
          <p className="mb-2 text-gray-500">Create an Asset</p>
          <h2 className="text-4xl font-semibold mb-12">In Three Easy Steps</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="text-4xl font-extrabold mb-6 p-4 px-6 bg-emerald-200 w-fit">
                1
              </p>
              <p className="text-xl">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold mb-6 p-4 px-6 bg-emerald-200 w-fit">
                2
              </p>
              <p className="text-xl">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
            </div>

            <div>
              <p className="text-4xl font-extrabold mb-6 p-4 px-6 bg-emerald-200  w-fit">
                3
              </p>
              <p className="text-xl">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <p className="mb-2 text-gray-500">Some Awesome</p>
          <h2 className="text-4xl font-semibold mb-12">Features</h2>

          <div className="mb-10 grid lg:grid-cols-3 gap-10">
            <div className="bg-amber-200 p-10 flex flex-col">
              <i className="material-symbols-sharp mb-5 text-4xl">category</i>
              <h2 className="text-4xl font-medium mb-5">Multiformat</h2>
              <p className="text-xl flex-1">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
              <button className="mt-10 flex gap-3 font-semibold">
                <span>Whitepaper</span>
                <i className="material-symbols-sharp">trending_flat</i>
              </button>
            </div>
            <div className="bg-emerald-200 p-10 flex flex-col">
              <i className="material-symbols-sharp mb-5 text-4xl">security</i>
              <h2 className="text-4xl font-medium mb-5">Security</h2>
              <p className="text-xl flex-1">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
              <button className="mt-10 flex gap-3 font-semibold">
                <span>Whitepaper</span>
                <i className="material-symbols-sharp">trending_flat</i>
              </button>
            </div>
            <div className="bg-rose-200 p-10 flex flex-col">
              <i className="material-symbols-sharp mb-5 text-4xl">storefront</i>
              <h2 className="text-4xl font-medium mb-5">Marketplaces</h2>
              <p className="text-xl flex-1">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
              <button className="mt-10 flex gap-3 font-semibold">
                <span>Whitepaper</span>
                <i className="material-symbols-sharp">trending_flat</i>
              </button>
            </div>
          </div>

          <div className="mb-20 grid lg:grid-cols-5 gap-10">
            <div className="bg-violet-200 p-10 flex flex-col lg:col-span-3">
              <i className="material-symbols-sharp mb-5 text-4xl">public</i>
              <h2 className="text-4xl font-medium mb-5">Public</h2>
              <p className="text-xl flex-1">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place.
              </p>
              <button className="mt-10 flex gap-3 font-semibold">
                <span>Whitepaper</span>
                <i className="material-symbols-sharp">trending_flat</i>
              </button>
            </div>

            <div className="bg-cyan-200 p-10 flex flex-col lg:col-span-2">
              <i className="material-symbols-sharp mb-5 text-4xl">functions</i>
              <h2 className="text-4xl font-medium mb-5">Keccak-256</h2>
              <p className="text-xl flex-1">
                The easiest way to track, send, store, invest in more than 4000+
                Assets at a place. The easiest way to track, send, store, invest
                in more than 4000+ Assets at a place.
              </p>
              <button className="mt-10 flex gap-3 font-semibold">
                <span>Whitepaper</span>
                <i className="material-symbols-sharp">trending_flat</i>
              </button>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-2 text-gray-500">Some Important</p>
          <h2 className="text-4xl font-semibold mb-12">Numbers</h2>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="grid items-center gap-8 grid-cols-2 lg:col-span-2">
              <div>
                <p className="text-4xl font-extrabold mb-2 w-fit">0.1 ETH</p>
                <p className="text-xl">Mint price</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-2 w-fit">7.5%</p>
                <p className="text-xl">Move comission</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-2 w-fit">4,362</p>
                <p className="text-xl">Owners</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-2 w-fit">150K</p>
                <p className="text-xl">Verifications</p>
              </div>
            </div>

            <div className="bg-emerald-200 p-10 lg:col-span-3">
              <h2 className="text-4xl font-medium mb-10">
                Ready to dive in? Let&apos;s start!
              </h2>
              <div className="md:flex gap-4">
                <button className="p-6 w-full md:w-auto bg-black text-white font-semibold">
                  Become an Owner
                </button>
                <button className="p-6 w-full md:w-auto flex gap-3 font-semibold justify-center">
                  <span>Back to Top</span>
                  <i className="material-symbols-sharp">north</i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="pt-24 pb-12 text-center">
        <div className="container">
          <SolidumIcon className="w-12 mx-auto p-2 cursor-pointer" />
          <div className="flex py-6 gap-4 flex-wrap justify-center">
            <p>About</p>
            <p>Terms</p>
            <p>Twitter</p>
            <p>OpenSea</p>
            <p>Instagram</p>
            <p>Whitepaper</p>
          </div>
          <div>© 2023 · Solidum Labs · All rights reserved</div>
        </div>
      </footer>
    </>
  )
}
