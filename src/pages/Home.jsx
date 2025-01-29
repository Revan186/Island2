import {Canvas} from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import { useState, useEffect} from 'react'
import HomeInfo from '../components/HomeInfo'
import morrowind from '../assets/morrowind.mp3'
import { soundon, soundoff } from '../assets/icons'

const Home = () => {
	const [isRotating, setIsRotating] = useState(false)
	const [currentStage, setCurrentStage] = useState(1);
	const audioRef = useRef(new Audio(morrowind));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
	

	const [isPlayingMusic, setIsPlayingMusic] = useState(false);


	const audition = () => {
		
		audioRef.current.play()
	
		
	
	}
	
	

	const adjustIslandForScreenSize = () => {
	

		let screenScale = null;
		let screenPosition = [0, -6.5, -43];
		let rotation = [0.1, 4.7, 0];

		if(window.innerWidth < 768){
			screenScale = [0.9, 0.9, 0.9] ;
		} else {
			screenScale = [1, 1, 1] ;
		}

		return [screenScale, screenPosition, rotation]
	}
	
	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition

		if(window.innerWidth < 768){
			screenScale = [1.5, 1.5, 1.5] ;
			screenPosition = [0, 1.5, 0]
		} else {
			screenScale = [3, 3, 3] ;
			screenPosition = [0,-4,-4]
		}

		return [screenScale, screenPosition, ]
	}

	const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
	const [planeScale, planePosition] = adjustPlaneForScreenSize()

	return (
		<section className='w-screen h-screen relative'>
			<div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
				{currentStage && <HomeInfo currentStage={currentStage}/>}
			</div>

		<Canvas className={ `w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{near:0.1, far:1000}}>
				<Suspense fallback={<Loader/>}>
					<directionalLight position={[1,1,1]} intensity={2}/>
					<ambientLight intensity={0.5}/>
					
					
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

					<Bird/>

					<Sky isRotating={isRotating} />

					<Island
					isRotating={isRotating}
					setIsRotating={setIsRotating}
					setCurrentStage={setCurrentStage}
					position={islandPosition}
					rotation={[0.1, 4.7077, 0]}
					scale={islandScale}
					/>

					<Plane
					scale={planeScale}
					position={planePosition}
					isRotating={isRotating}
					rotation={[0, 20.1, 0]}
					
					/>
				</Suspense>
		</Canvas>

		<div className='absolute bottom-2 left-2'>
       <img
					onLoad={audition()}
         src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain hidden'
        />
      </div>

			

		</section>
	)
}

export default Home