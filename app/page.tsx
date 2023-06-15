import { HomePageHashResolver } from '@/components/assets'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="container pt-12 pb-24">
      <section className="mb-24">
        <div className="grid xl:grid-cols-2 gap-32 mb-32">
          <div className="pt-16">
            <h1 className="text-4xl md:text-5xl/tight font-bold mb-8">
              Experience the NFT Revolution: Any File Can Be Your Asset!
            </h1>
            <p className="text-gray-500 mb-8 text-lg">
              Unlock the value in your digital assets. Solidum offers an easy
              and secure way to transform any file into a unique NFT, opening
              new avenues for creativity and potential revenue.
            </p>

            <div className="md:flex gap-4 mt-16">
              <button className="relative p-6 w-full md:w-auto font-semibold group text-black">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-emerald-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Create Asset</span>
              </button>
              <div className="p-6 w-full md:w-auto flex gap-3 font-semibold justify-center">
                <span>Learn more</span>
                <i className="material-symbols-sharp">
                  keyboard_double_arrow_down
                </i>
              </div>
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
            <div className="relative font-bold text-2xl p-6 group text-black text-center w-16">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-emerald-200 group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">1</span>
            </div>
            <p className="text-xl mt-8">
              Select any digital file from your device that you wish to turn
              into an NFT. Add relevant metadata to provide context and enhance
              the value of your digital asset.
            </p>
          </div>

          <div>
            <div className="relative font-bold text-2xl p-6 group text-black text-center w-16">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-amber-200 group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">2</span>
            </div>
            <p className="text-xl mt-8">
              Review your file and metadata in a preview before finalizing. Our
              platform transforms your file into a unique, tamper-proof NFT
              using the secure Keccak-256 hashing algorithm.
            </p>
          </div>

          <div>
            <div className="relative font-bold text-2xl p-6 group text-black text-center w-16">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-rose-200 group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative">3</span>
            </div>
            <p className="text-xl mt-8">
              Once minted, your NFT appears in your personal gallery. Easily
              list your NFT on any popular marketplace and reach out to a
              worldwide audience of potential buyers.
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
            <h2 className="text-4xl font-medium mb-5">Universal</h2>
            <p className="text-lg flex-1">
              From eBooks to source codes, transform any file on your computer
              into a unique, tradable NFT with just a few clicks.
            </p>
            <button className="mt-10 flex gap-3 font-semibold">
              <span>Whitepaper</span>
              <i className="material-symbols-sharp">trending_flat</i>
            </button>
          </div>
          <div className="bg-emerald-200 p-10 flex flex-col">
            <i className="material-symbols-sharp mb-5 text-4xl">security</i>
            <h2 className="text-4xl font-medium mb-5">Security</h2>
            <p className="text-lg flex-1">
              Each NFT created on our platform comes with the inherent security
              and transparency of blockchain technology. Feel confident in the
              authenticity of your digital assets.
            </p>
            <button className="mt-10 flex gap-3 font-semibold">
              <span>Etherscan</span>
              <i className="material-symbols-sharp">trending_flat</i>
            </button>
          </div>
          <div className="bg-violet-200 p-10 flex flex-col">
            <i className="material-symbols-sharp mb-5 text-4xl">diversity_2</i>
            <h2 className="text-4xl font-medium mb-5">Community</h2>
            <p className="text-lg flex-1">
              Join a vibrant community of creators, developers, and digital
              enthusiasts, all exploring the new frontiers of NFTs. You bring
              the files; we provide the platform.
            </p>
            <button className="mt-10 flex gap-3 font-semibold">
              <span>Discord</span>
              <i className="material-symbols-sharp">trending_flat</i>
            </button>
          </div>
        </div>

        <div className="mb-20 grid lg:grid-cols-2 gap-10">
          <div className="bg-rose-200 p-10 flex flex-col">
            <i className="material-symbols-sharp mb-5 text-4xl">storefront</i>
            <h2 className="text-4xl font-medium mb-5">Marketplaces</h2>
            <p className="text-lg flex-1">
              Ready to sell your unique NFTs? Solidum seamlessly integrates with
              all the popular NFT marketplaces. List your newly minted NFTs on
              your preferred platform and reach a global audience of digital
              collectors.
            </p>
            <button className="mt-10 flex gap-3 font-semibold">
              <span>OpenSea</span>
              <i className="material-symbols-sharp">trending_flat</i>
            </button>
          </div>

          <div className="bg-cyan-200 p-10 flex flex-col">
            <i className="material-symbols-sharp mb-5 text-4xl">functions</i>
            <h2 className="text-4xl font-medium mb-5">Keccak-256</h2>
            <p className="text-lg flex-1">
              Leveraging the power of Keccak-256, the secure hash algorithm of
              Ethereum, every NFT created on our platform is assigned a unique,
              immutable identifier. This means your NFTs are tamper-proof,
              ensuring their authenticity and originality.
            </p>
            <button className="mt-10 flex gap-3 font-semibold">
              <span>Wikipedia</span>
              <i className="material-symbols-sharp">trending_flat</i>
            </button>
          </div>
        </div>
      </section>

      <section>
        <p className="mb-2 text-gray-500">Some Important</p>
        <h2 className="text-4xl font-semibold mb-12">Numbers</h2>

        <div className="grid lg:grid-cols-2 gap-24">
          <div className="grid items-center gap-8 grid-cols-2">
            <div>
              <p className="text-4xl font-extrabold mb-2 w-fit">0.005 ETH</p>
              <p className="text-xl">Mint price</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold mb-2 w-fit">2.5%</p>
              <p className="text-xl">Royalty comission</p>
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

          <div>
            <h2 className="text-4xl/normal font-medium mb-8">
              Embrace the NFT Revolution. Begin Your Journey Now!
            </h2>
            <div className="md:flex gap-4">
              <button className="relative w-full md:w-auto p-6 font-semibold group text-black">
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-emerald-200 group-hover:translate-x-0 group-hover:translate-y-0" />
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Create Asset</span>
              </button>
              <button className="p-6 w-full md:w-auto flex gap-3 font-semibold justify-center">
                <span>Back to Top</span>
                <i className="material-symbols-sharp">north</i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
