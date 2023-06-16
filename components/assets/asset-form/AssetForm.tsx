'use client'

import { PreviewInput } from '../PreviewInput'

interface IAssetFormProps {
  token?: string
}

export const AssetForm = ({ token }: IAssetFormProps) => {
  return (
    <div>
      <div className="mb-8">
        <PreviewInput />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-sm font-bold">Name</label>
        <input
          placeholder="My Asset"
          className="text-lg p-3 block w-full font-medium focus:outline-none border-4 border-black focus:border-dashed"
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-sm font-bold">Type</label>
        <input
          placeholder="Video, Image, Book, PDF"
          className="text-lg p-3 block w-full font-medium focus:outline-none border-4 border-black focus:border-dashed"
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-sm font-bold">External Link</label>
        <input
          placeholder="https://..."
          className="text-lg p-3 block w-full font-medium focus:outline-none border-4 border-black focus:border-dashed"
        />
      </div>
      <div className="mb-8">
        <label className="block mb-2 text-sm font-bold">Description</label>
        <textarea
          placeholder="My awesome NFT description..."
          className="text-lg p-3 block w-full font-medium focus:outline-none border-4 border-black focus:border-dashed"
        />
      </div>
      <button className="relative p-6 w-full font-semibold group text-black">
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-emerald-200 group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">Mint NFT</span>
      </button>
    </div>
  )
}
