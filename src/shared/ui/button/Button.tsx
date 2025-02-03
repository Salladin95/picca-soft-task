import React from "react"
import { cn } from "~/shared/lib"
import { cva } from "class-variance-authority"

import "./button.scss"

type ButtonProps = {
	children: React.ReactNode
	className?: string
	variant?: "primary" | "link"
	isActive?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonVariants = cva("button", {
	variants: {
		variant: {
			primary: "button--primary",
			link: "button--link",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
})

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { children, className, variant, isActive, ...rest } = props

	return (
		<button ref={ref} className={cn(buttonVariants({ variant }), className)} data-active={isActive} {...rest}>
			{children}
		</button>
	)
})

Button.displayName = "Button"
