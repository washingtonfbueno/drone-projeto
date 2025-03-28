import { FunctionComponent } from "react";

interface CompleteLineComponentProps {}

export const CompleteLineComponent: FunctionComponent<
	CompleteLineComponentProps
> = () => {
	return (
		<div className="absolute right-[50%] mx-auto top-[0] translate-y-[-100%] -translate-x-[-100%] border-l-1 h-48" />
	);
};
