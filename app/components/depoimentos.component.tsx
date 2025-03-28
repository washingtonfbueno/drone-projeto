import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import Image from "next/image";
import { DepoimentoComponent } from "./depoimento.component";

interface DepoimentosComponentProps {}

export const DepoimentosComponent: FunctionComponent<
	DepoimentosComponentProps
> = () => {
	return (
		<div>
			<TitleComponent>Depoimento de clientes</TitleComponent>

			<div className="grid grid-cols-2 relative">
				{/* Draw line to fill empty space in between components */}
				<div className="absolute right-[50%] translate-y-[-100%] translate-x-[100%] top-[0] border-l-1 h-48" />

				<Image
					src="/images/drone-sobre.jpg" // ✅ Use a valid path
					alt="drone"
					width={400} // ✅ Required: Define width
					height={400} // ✅ Required: Define height
					className="rounded-lg"
				/>

				<DepoimentoComponent />
			</div>
		</div>
	);
};
