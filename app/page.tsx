import Image from "next/image";
import { ServicosComponent } from "./components/servicos.component";
import { SobreComponent } from "./components/sobre-component";
import { PorqueEscolherComponent } from "./components/porque-escolher.component";
import { ComoFuncionaComponent } from "./components/como-funciona.component";
import { DepoimentosComponent } from "./components/depoimentos.component";
import { BlogComponent } from "./components/blog.component";

export default function Home() {
	return (
		<div className="flex items-center justify-center bg-[#f9f7f0]">
			<div className="max-w-[1200px] w-full h-full py-36 px-8">
				<ServicosComponent />

				<SobreComponent />

				<PorqueEscolherComponent />

				<ComoFuncionaComponent />

				<DepoimentosComponent />

				<BlogComponent />
			</div>
		</div>
	);
}
