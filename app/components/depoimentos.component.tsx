import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import Image from "next/image";
import { DepoimentoComponent } from "./depoimento.component";

interface DepoimentosComponentProps {}

export const DepoimentosComponent: FunctionComponent<
	DepoimentosComponentProps
> = () => {
	return (
		<>
			<div className="grid grid-cols-2 gap-16">
				<TitleComponent>Depoimento de clientes</TitleComponent>

				<div className="border-l-1"></div>
			</div>

			<div className="grid grid-cols-2 gap-16">
				<Image
					src="/images/drone-sobre.jpg" // ✅ Use a valid path
					alt="drone"
					width={400} // ✅ Required: Define width
					height={100} // ✅ Required: Define height
					className="rounded-lg"
				/>

				<DepoimentoComponent />
			</div>
		</>
	);
};
