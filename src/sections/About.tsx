import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import JavaScriptIcon from "@/assets/icons/javascript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import AngularIcon from "@/assets/icons/angular.svg";
import IonicIcon from "@/assets/icons/ionic.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import AdobeXDIcon from "@/assets/icons/adobe-xd.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import PythonIcon from "@/assets/icons/python.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import JavaIcon from "@/assets/icons/java.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import mapimage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Ionic",
    iconType: IonicIcon,
  },
  {
    title: "Angular",
    iconType: AngularIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Adobe XD",
    iconType: AdobeXDIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Django",
    iconType: DjangoIcon,
  },
  {
    title: "Java",
    iconType: JavaIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  return (
    <section id="about">
    <div className="py-16">
      <div className="container">
      <SectionHeader
        eyebrow="Sobre mi"
        title="Conoce más sobre mi"
        description="Un vistazo acerca de las tecnologías que utilizo y algunos intereses adicionales"
      />
      <div className="mt-20 flex flex-col gap-8">
        <Card className="h-[320px]">
          <CardHeader title="Habilidades" description="Da un vistazo a las tecnologías que puedo manejar para construir aplicaciones" />
          <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]"/>
          <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]"/>
        </Card>
        <Card className="h-[320px] p-0 relative">
            <Image src={mapimage} alt="Mapa" className="h-full w-full object-cover object-left-top" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
            <Image src={smileMemoji} alt="Memoji" className="size-20"/>
            </div>
        </Card>
      </div>
    </div>
    </div>
    </section>
  );
};
