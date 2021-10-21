import MainLayout from "../components/MainLayout";
import AboutMe from "../components/skills/skills";
import Facts from "../components/facts/facts";

export default function Home() {
  return (
    <MainLayout title="Главная">
      <Facts />
      <AboutMe/>
    </MainLayout>
  )
}