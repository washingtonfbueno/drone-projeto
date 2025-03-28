import { FunctionComponent } from "react";
import { NavbarComponent } from "./navbar.component";
import { HeroButtonComponent } from "./hero-button.component";

interface HeroComponentProps {}

export const HeroComponent: FunctionComponent<HeroComponentProps> = () => {
	return (
		<div
			className="h-screen w-full bg-cover bg-center flex justify-center"
			style={{ backgroundImage: "url('images/hero-gif.gif')" }}
		>
			<div className="max-w-[1400px] w-full px-8 pt-8 pb-36 text-white flex flex-col justify-between">
				<NavbarComponent />

				<HeroButtonComponent />

				<p className="self-end text-4xl font-bold">
					Entregas rápidas e inovadoras por drones
				</p>
			</div>
		</div>
	);
};
