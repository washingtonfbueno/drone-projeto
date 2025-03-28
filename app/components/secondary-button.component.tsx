import { ButtonHTMLAttributes, FunctionComponent } from "react";

interface SecondaryButtonComponentProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: string;
}

export const SecondaryButtonComponent: FunctionComponent<
	SecondaryButtonComponentProps
> = ({ children, ...props }) => {
	return (
		<button
			className="bg-white text-[#222222] text-lg px-8 py-2 rounded-full transition-colors duration-300 hover:bg-gray-200 border border-[#222222] shadow-md hover:shadow-lg"
			{...props}
		>
			{children}
		</button>
	);
};
