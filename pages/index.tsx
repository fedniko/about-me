import MainLayout from "../components/MainLayout";
import AboutMe from "../components/skills/skills";

export default function Home() {
  return (
    <MainLayout title="Главная">
      <AboutMe/>
    </MainLayout>
  )
}