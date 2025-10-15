// Arquivo: ../components/ParticlesComponent.tsx

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

// Adicionamos props para receber 'id' e 'options'
export default function ParticlesComponent(props: { id: string, options: ISourceOptions }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {
    console.log(`Partículas carregadas para o id: ${props.id}`);
  }, [props.id]);

  if (!ready) return null;

  return (
    <Particles
      id={props.id} // Usando o id recebido via props
      particlesLoaded={particlesLoaded}
      options={props.options} // Usando as options recebidas via props
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}