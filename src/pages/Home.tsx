import { AboutMeScreen } from "../screens/AboutMeScreen";
import { ClassesScreen } from "../screens/ClassesScreen";
import { HeroScreen } from "../screens/HeroScreen";
import { LearnScreen } from "../screens/LearnScreen";
import { TestimonialsScreen } from "../screens/TestimonialsScreen";
import { TutorialsScreen } from "../screens/TutorialsScreen";
import { LatestYoutubeVideos } from "../components/tutorials/LatestYoutubeVideos";

export const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroScreen />

      <LearnScreen />

      <TestimonialsScreen />

      <ClassesScreen />

      <TutorialsScreen />

      <LatestYoutubeVideos
        title="Tutoriales gratis de Archicad"
        subtitle="También podés empezar con mis videos recientes en YouTube."
        limit={3}
        variant="featured"
        compact
      />

      <AboutMeScreen />
    </div>
  );
};
