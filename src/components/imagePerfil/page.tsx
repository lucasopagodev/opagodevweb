import Image from "next/image";

export default function ImagePerfil() {
	return(
		<div>
			<Image 
				src="/opagodev.jpg"
				width={150}
				height={150}
				className='rounded-full'
				alt="Sreenshots of the dashboard project showing desktop version"
			/>
		</div>
	);
}