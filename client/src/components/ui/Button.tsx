import type { ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';

type Props = {
  children: React.ReactNode;
  variant?: "confirm";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonStyles = tv({
  base: "text-white w-full mt-4 py-4 rounded-full font-semibold tracking-tight shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 disabled:opacity-70 hover:cursor-pointer disabled:pointer-events-none",
  variants: {
    variant: {
      confirm: "bg-tertiary"
    }
  }
})

export default function Button({ children, variant, ...props }: Props) {
  return <button className={buttonStyles({ variant })} {...props}>{children}</button>
}