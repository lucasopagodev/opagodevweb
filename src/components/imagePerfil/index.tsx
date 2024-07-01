import Image from "next/image";

export default function ImagePerfil() {
	return(
		<div>
			<Image 
				id="imageIntro"
				src="/opagodev.jpg"
				width={150}
				height={200}
				className='h-full w-full object-cover object-center'
				alt="Sreenshots of the dashboard project showing desktop version"
			/>
		</div>
	);
}