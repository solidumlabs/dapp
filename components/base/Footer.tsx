import { SolidumIcon } from '@/components/base'

export const Footer = () => {
  return (
    <footer className="pb-12 text-center">
      <div className="container">
        <SolidumIcon className="w-12 mx-auto p-2 cursor-pointer" />
        <div className="flex py-6 gap-4 flex-wrap justify-center">
          <p>Terms</p>
          <p>Privacy</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Discord</p>
          <p>OpenSea</p>
          <p>Whitepaper</p>
          <p>Help</p>
        </div>
        <div>Solidum Labs 2023 ©</div>
      </div>
    </footer>
  )
}
