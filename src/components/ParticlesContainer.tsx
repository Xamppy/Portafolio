'use client';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



import { Engine, Container } from "@tsparticles/engine";

interface ParticlesContainerProps {
    id: string;
}

const ParticlesContainer = (props: ParticlesContainerProps) => {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        if (!container) return;
        console.log(container);
    };

    const options = useMemo(() => ({
                fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "grab",
                },
                onHover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
            modes: {
                push: {
                    distance: 200,
                    duration: 15,
                },
                grab: {
                    distance: 150,
                },
            },
        },
        particles: {
            color: {
                value: "#87CEEB",
            },
            links: {
                color: "#FFFFFF",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none" as const,
                enable: true,
                outModes: {
                    default: "bounce" as const,
                },
                random: true,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 90,
            },
            opacity: {
                value: 1.0,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), []);

    /*return <Particles id={props.id} particlesLoaded={particlesLoaded} options={options} />;*/
    return (
        <div className="absolute top-0 left-0 w-full h-full -z-30">
            {init ? (
                <Particles
                    id="particles-container"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            ) : null}
        </div>
    );
};


export default ParticlesContainer;