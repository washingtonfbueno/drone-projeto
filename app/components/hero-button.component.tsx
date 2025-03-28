import { FunctionComponent } from "react";

interface HeroButtonComponentProps {}

export const HeroButtonComponent: FunctionComponent<
	HeroButtonComponentProps
> = () => {
	return (
		<button className="text-4xl bg-black opacity-75 px-8 py-4 rounded-full w-fit transition-all duration-300 hover:opacity-100 shadow-md hover:shadow-xl">
			PEÇA AGORA
		</button>
	);
};
