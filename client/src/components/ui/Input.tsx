const Input = ({ ...props }) => {
  return (
    <input className={`w-full bg-secondary/5 border-none rounded-md px-5 py-4 focus:bg-white focus:ring-2 focus:ring-tertiary transition-all duration-300 outline-none`} {...props} />
  )
}

export default Input