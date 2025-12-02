import { AboutMeScreen } from "../screens/AboutMeScreen";
import { ClassesScreen } from "../screens/ClassesScreen";
import { HeroScreen } from "../screens/HeroScreen";
import { LearnScreen } from "../screens/LearnScreen";
import { TestimonialsScreen } from "../screens/TestimonialsScreen";
import { TutorialsScreen } from "../screens/TutorialsScreen";

export const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroScreen />

      <LearnScreen />

      <TestimonialsScreen />

      <ClassesScreen />

      <TutorialsScreen />

      <AboutMeScreen />
    </div>
  );
};
