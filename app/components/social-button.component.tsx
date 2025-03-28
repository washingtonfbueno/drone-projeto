import { FunctionComponent } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface SocialButtonComponentProps {}

const color = "#222222";

export const SocialButtonsComponent: FunctionComponent<
	SocialButtonComponentProps
> = () => {
	return (
		<div className="flex flex-col justify-self-end items-end space-y-4">
			<div className="space-x-2">
				<button className="p-2 rounded-full bg-white">
					<FaFacebookF color={color} size={24} />
				</button>

				<button className="p-2 rounded-full bg-white">
					<FaInstagram color={color} size={24} />
				</button>

				<button className="p-2 rounded-full bg-white">
					<FaYoutube color={color} size={24} />
				</button>
			</div>

			<p className="text-xl">
				Atendimento prioritário para pessoas com deficiência
			</p>
		</div>
	);
};
