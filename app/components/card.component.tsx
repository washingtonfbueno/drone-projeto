import { FunctionComponent } from "react";

interface CardComponentProps {
	title: string;
	description: string;
	hasButton: boolean;
}

export const CardComponent: FunctionComponent<CardComponentProps> = ({
	title,
	description,
	hasButton,
}) => {
	return (
		<div className="flex flex-col text-white bg-[#222222] p-8 h-[400px]">
			<p className="text-3xl mb-8">{title}</p>

			<p className="text-xl">{description}</p>
		</div>
	);
};
