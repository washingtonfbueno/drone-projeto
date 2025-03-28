import { FunctionComponent } from "react";

interface TitleComponentProps {
	children: string;
}

export const TitleComponent: FunctionComponent<TitleComponentProps> = ({
	children,
}) => {
	return <p className="text-4xl mb-8">{children}</p>;
};
