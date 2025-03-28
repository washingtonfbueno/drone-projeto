import { ServicosComponent } from "./components/servicos.component";
import { SobreComponent } from "./components/sobre-component";
import { PorqueEscolherComponent } from "./components/porque-escolher.component";
import { ComoFuncionaComponent } from "./components/como-funciona.component";
import { DepoimentosComponent } from "./components/depoimentos.component";
import { BlogComponent } from "./components/blog.component";
import { FooterComponent } from "./components/footer.component";
import { HeroComponent } from "./components/hero.component";

export default function Home() {
	return (
		<div className="flex justify-center items-center flex-col space-y-24 bg-[#f9f7f0]">
			<HeroComponent />

			<div className="max-w-[1200px] w-full h-full px-8 space-y-24">
				<ServicosComponent />

				<SobreComponent />

				<PorqueEscolherComponent />

				<ComoFuncionaComponent />

				<DepoimentosComponent />

				<BlogComponent />
			</div>

			<FooterComponent />
		</div>
	);
}
