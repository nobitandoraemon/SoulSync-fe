// import { cva } from "class-variance-authority";
// import { cn } from "../lib/utils";

// const ButtonVariants = cva(
// 	"px-4 py-1 border rounded-md text-text transition-all",
// 	{
// 		variants: {
// 			variant: {
// 				ghost: "bg-transparent hover:bg-slate-300",
// 				primary: "bg-primary hover:bg-primary/30",
// 				secondary: "bg-secondary hover:bg-secondary/30",
// 				accent: "bg-accent hover:bg-accent/30",
// 			},
// 			size: {
// 				sm: "text-sm",
// 				md: "text-md",
// 				lg: "text-lg",
// 			},
// 		},
// 		defaultVariants: {
// 			variant: "primary",
// 			size: "md",
// 		},
// 	}
// );

// const Button = ({ className, variant, size, children, ...props }) => {
// 	return (
// 		<button
// 			className={cn(ButtonVariants({ variant, size, className }))}
// 			{...props}
// 		>
// 			{children}
// 		</button>
// 	);
// };

// export default Button;
