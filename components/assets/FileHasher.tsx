'use client'

import { ChangeEvent } from 'react'
import { keccak256 } from 'js-sha3'
import classNames from 'classnames'

interface IFileHasherProps {
  onFileHash: (tokenID: string, file: File) => void
  className?: string
}

export const FileHasher = ({ onFileHash, className }: IFileHasherProps) => {
  const onSelectFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined | null = event.target.files?.item(0)
    if (!file) return
    const buffer = await file.arrayBuffer()
    const hash: string = keccak256(buffer)
    const tokenID = BigInt('0x' + hash).toString()
    onFileHash(tokenID, file)
  }
  const _className = classNames(
    'block relative p-10 font-semibold group text-black cursor-pointer',
    className
  )
  return (
    <>
      <input
        type="file"
        id="file-hasher"
        className="hidden"
        onChange={onSelectFile}
      />
      <label htmlFor="file-hasher" className={_className}>
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-amber-200 group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="absolute inset-0 w-full h-full border-4 border-black border-dashed"></span>
        <span className="relative">
          <div className="h-full w-full flex flex-col">
            <div className="flex-1 border-dashed flex flex-col items-center justify-center">
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
        </span>
      </label>
    </>
  )
}
