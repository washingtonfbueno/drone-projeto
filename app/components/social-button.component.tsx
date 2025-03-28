import { FunctionComponent } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface SocialLinksComponentProps {}

const color = "#222222";

export const SocialLinksComponent: FunctionComponent<
	SocialLinksComponentProps
> = () => {
	return (
		<div className="flex flex-col justify-self-end items-end space-y-4">
			<div className="flex space-x-4">
				<a
					className="p-2 rounded-full bg-white transition-transform transform hover:scale-125"
					href=""
				>
					<FaFacebookF color={color} size={24} />
				</a>

				<a
					className="p-2 rounded-full bg-white transition-transform transform hover:scale-125"
					href=""
				>
					<FaInstagram color={color} size={24} />
				</a>

				<a
					className="p-2 rounded-full bg-white transition-transform transform hover:scale-125"
					href=""
				>
					<FaYoutube color={color} size={24} />
				</a>
			</div>

			<p className="text-xl">
				Atendimento prioritário para pessoas com deficiência
			</p>
		</div>
	);
};
