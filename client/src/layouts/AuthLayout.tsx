import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main>
      <div className="fixed inset-0 z-0">
        <img alt="Minimalist architectural space" className="w-full h-full object-cover opacity-40"
          data-alt="Interior of a minimalist white architectural space with large windows and soft diffused morning light casting subtle shadows"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe7Js9EePlbCnFhhta1G28H_dksS3BlurAkQ9sKbpQrZIxcc7dt2BBhNNKWcne03Njpi5be-Idbv4vAyn3aVsoLfHDeDTHqaad5YMrwOIxxucIgGJOpvrS-MYvif9yJ5TYap2UUs0TBpu0jw9YJveBeP6PVdfY1XYvy1Sf6xpGP0nSv1K5VTi9w-v39UglQ77TUW5y1uClJ2LbEPTKrsLNVgfqDxHk1AAhustc2hrz6zOPDDQMZB336_gTvCYvhc4CoofZooPhPFA" />
        <div className="absolute inset-0 opacity-90 overflow-y-auto py-4">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout