'use client'

import { ChangeEvent } from 'react'
import { keccak256 } from 'js-sha3'
import { useRouter } from 'next/navigation'

interface IFileHasherProps {
  onFileHash: (hash: string) => void
}

export const FileHasher = ({ onFileHash }: IFileHasherProps) => {
  const onSelectFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined | null = event.target.files?.item(0)
    if (!file) return
    const buffer = await file.arrayBuffer()
    const hash: string = keccak256(buffer)
    onFileHash(hash)
  }
  return (
    <>
      <input
        type="file"
        id="file-hasher"
        className="hidden"
        onChange={onSelectFile}
      />
      <label
        htmlFor="file-hasher"
        className="bg-emerald-200 p-10 cursor-pointer"
      >
        <div className="h-full w-full flex flex-col">
          <div className="flex-1 border-4 border-dashed border-black flex flex-col items-center justify-center p-10">
            <div className="grid grid-cols-4 gap-6">
              <i className="material-symbols-sharp text-4xl">draft</i>
              <i className="material-symbols-sharp text-4xl">movie</i>
              <i className="material-symbols-sharp text-4xl">music_note</i>
              <i className="material-symbols-sharp text-4xl">photo</i>
              <i className="material-symbols-sharp text-4xl">folder_zip</i>
              <i className="material-symbols-sharp text-4xl">terminal</i>
              <i className="material-symbols-sharp text-4xl">book</i>
              <i className="material-symbols-sharp text-4xl">code</i>
            </div>
            <p className="mt-8 text-xl font-semibold text-center">
              Drag & Drop or Choose File
            </p>
          </div>
        </div>
      </label>
    </>
  )
}

export const HomePageHashResolver = () => {
  const router = useRouter()
  return <FileHasher onFileHash={(hash) => router.push('/token/' + hash)} />
}
