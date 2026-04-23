const Footer = () => {
  return (
    <footer className="w-full py-8 px-8 flex flex-col md:flex-row justify-between items-center -z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <p className="font-inter text-xs uppercase tracking-widest text-slate-500">© 2024 Atelier Digital. All rights reserved.</p>
      </div>
      <div className="flex gap-8 mt-4 md:mt-0 pointer-events-auto">
        <a className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" href="#">Sustainability</a>
        <a className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" href="#">Contact</a>
        <a className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy</a>
      </div>
    </footer>
  )
}

export default Footer