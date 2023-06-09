'use client'

import { ChangeEvent, useState } from 'react'

export const PreviewInput = () => {
  const [url, setUrl] = useState<string>()

  const onSelectFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined | null = event.target.files?.item(0)
    if (!file) return
    setUrl(URL.createObjectURL(file))
  }

  return (
    <>
      <input
        type="file"
        id="preview-image"
        className="hidden"
        onChange={onSelectFile}
        accept="image/png, image/jpeg, image/gif"
      />
      <label
        htmlFor="preview-image"
        className="cursor-pointer relative w-full group text-black"
      >
        <span className="absolute inset-0 w-full h-full bg-emerald-200 transition duration-300 ease-out transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <div className="relative">
          <div className="relative aspect-square border-4 border-black">
            <div className="absolute w-full h-full flex-1 flex flex-col items-center justify-center">
              <i className="material-symbols-sharp text-6xl">image_search</i>
              <p className="mt-4 text-xl font-semibold text-center mb-2">
                Preview Picture
              </p>
              <p>File types supported: PNG, JPG, or GIF</p>
              <p>Recomended size: 1024x1024</p>
            </div>
            <div
              className="absolute w-full h-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: url ? 'url(' + url + ')' : undefined,
                backgroundColor: url ? 'white' : 'transparent',
              }}
            />
          </div>
          <div className="w-full p-6 text-center font-semibold">
            Choose Image
          </div>
        </div>
      </label>
    </>
  )
}
