import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface PrimaryButtonComponentProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

export const PrimaryButtonComponent: FunctionComponent<
	PrimaryButtonComponentProps
> = ({ children, ...props }) => {
	return (
		<button
			className="bg-[#222222] text-white text-lg px-8 py-2 rounded-full transition-colors duration-300 hover:bg-[#333333] shadow-md hover:shadow-lg"
			{...props}
		>
			{children}
		</button>
	);
};
