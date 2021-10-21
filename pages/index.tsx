import MainLayout from "../components/MainLayout";
import AboutMe from "../components/skills/skills";
import Facts from "../components/facts/facts";
import Pendulum from "../components/pendulum/pendulum";

export default function Home() {
  return (
    <MainLayout title="Главная">
      <Facts />
      <Pendulum />
      <AboutMe/>
    </MainLayout>
  )
}