import { FunctionComponent } from "react";
import { NavbarComponent } from "./navbar.component";
import { HeroButtonComponent } from "./hero-button.component";

interface HeroComponentProps {}

export const HeroComponent: FunctionComponent<HeroComponentProps> = () => {
	return (
		<div
			className="h-screen w-full bg-cover bg-center flex justify-center"
			style={{ backgroundImage: "url('images/drone-hero.jpeg')" }}
		>
			<div className="max-w-[1200px] w-full px-8 pt-8 pb-36 text-white flex flex-col justify-between">
				<NavbarComponent />

				<HeroButtonComponent />

				<p className="self-end text-4xl font-bold w-48">
					Entregas rápidas e inovadoras por drones
				</p>
			</div>
		</div>
	);
};
