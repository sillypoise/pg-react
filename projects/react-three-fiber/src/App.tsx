import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

function Box() {
    let ref = useRef<any>();
    let { viewport } = useThree();
    let [clicked, setClicked] = useState(false);
    let [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(viewport.height),
    });
    useFrame((state) => {
        ref.current.position.set(data.x * viewport.width, (data.y += 0.1), 0);
        if (data.y > viewport.height / 1.5) {
            data.y = -viewport.height / 1.5;
        }
    });
    return (
        <mesh ref={ref} onClick={() => setClicked(!clicked)}>
            <boxGeometry />
            <meshBasicMaterial color="orange" />{" "}
        </mesh>
    );
}

function App({ count = 100 }) {
    return (
        <Canvas>
            {Array.from({ length: count }, (_, i) => (
                <Box key={i} />
            ))}
        </Canvas>
    );
}

export default App;
