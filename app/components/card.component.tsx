import { FunctionComponent } from "react";

interface CardComponentProps {
	title: string;
	description: string;
	button?: React.ReactNode;
}

export const CardComponent: FunctionComponent<CardComponentProps> = ({
	title,
	description,
	button,
}) => {
	return (
		<div className="relative flex flex-col space-y-8 text-white bg-[#222222] p-8 h-[500px]">
			<p className="text-3xl">{title}</p>

			<p className="text-xl">{description}</p>

			{button && (
				<div className="absolute right-[0%] bottom-0 mb-8 mr-8">
					{button}
				</div>
			)}
		</div>
	);
};
