import { Header, SolidumIcon } from '@/components/base'

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-20 mb-20 mt-10">
          {/* LEFT */}
          <div>
            <div className="mb-8 divide-y divide-dashed">
              <h1 className="text-3xl font-bold py-1.5">Solidum</h1>
              <p className="inline-block pt-1.5 text-gray-500">
                Own asset of any type
              </p>
            </div>
            <h1
              className="text-6xl md:text-8xl font-bold mb-8"
              style={{ lineHeight: 0.9 }}
            >
              NFT and someting more
            </h1>
            <p className="text-gray-500 mb-8">
              Easy-to-use cards, spend limits, approval flows, vendor payments,
              and more—plus an average savings of 3.5%.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-black text-white font-semibold">
                Create Asset
              </button>
              <button className="px-6 py-3 flex gap-3 font-semibold">
                <span>Learn more</span>
                <i className="material-symbols-sharp">more_down</i>
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="bg-green-200 p-10">
            <div className="h-full flex flex-col">
              <div className="flex-1 border-4 border-dashed border-black flex flex-col items-center justify-center p-10">
                <div
                  className="grid grid-cols-3 gap-6"
                  style={{ fontSize: '36px' }}
                >
                  <i className="material-symbols-sharp text-4xl">draft</i>
                  <i className="material-symbols-sharp text-4xl">movie</i>
                  <i className="material-symbols-sharp text-4xl">music_note</i>
                  <i className="material-symbols-sharp text-4xl">photo</i>
                  <i className="material-symbols-sharp text-4xl">folder_zip</i>
                  <i className="material-symbols-sharp text-4xl">terminal</i>
                </div>
                <p className="mt-8 text-xl font-semibold text-center">
                  Drag and Drop or Choose asset to verify
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-20 mb-20"></div>
        <div className="bg-black p-20 mb-20 h-96"></div>
        <div className="bg-black p-20 mb-20 h-96"></div>
        <div className="bg-black p-20 mb-20 h-96"></div>
        <div className="bg-black p-20 mb-20 h-96"></div>
      </div>
    </>
  )
}
