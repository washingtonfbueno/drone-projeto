import { FunctionComponent } from "react";
import { TitleComponent } from "./title.component";
import Image from "next/image";
import { DepoimentoComponent } from "./depoimento.component";
import { CompleteLineComponent } from "./complete-line.component";

interface DepoimentosComponentProps {}

export const DepoimentosComponent: FunctionComponent<
	DepoimentosComponentProps
> = () => {
	return (
		<div>
			<TitleComponent>Depoimento de clientes</TitleComponent>

			<div className="grid grid-cols-2 relative">
				<CompleteLineComponent />

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
