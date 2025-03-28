import { FunctionComponent } from "react";

interface TitleComponentProps {
	children: string;
}

export const TitleComponent: FunctionComponent<TitleComponentProps> = ({
	children,
}) => {
	return <p className="text-4xl mt-16 mb-12">{children}</p>;
};
