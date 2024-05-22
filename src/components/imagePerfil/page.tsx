import Image from "next/image";

export default function ImagePerfil() {
	return(
		<div>
			<Image 
				src="/opagodev.jpg"
				width={150}
				height={150}
				className='rounded-full h-full w-full object-cover object-center'
				alt="Sreenshots of the dashboard project showing desktop version"
			/>
		</div>
	);
}