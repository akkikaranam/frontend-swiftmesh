import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DetailLayout from "./layouts/DetailLayout";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import Insights from "./pages/insights/Insights";
import Careers from "./pages/careers/Careers";
import Contact from "./pages/contact/Contact";
import TalentStaffing from "./pages/talent-staffing/TalentStaffing";
import AiWorkforce from "./pages/ai-workforce/AiWorkforce";
import LlmWorkflows from "./pages/llm-workflows/LlmWorkflows";
import AiSolutionsConsultant from "./pages/ai-solutions-consultant/AiSolutionsConsultant";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="about" element={<About />} />
                    <Route path="insights" element={<Insights />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="contact" element={<Contact />} />

                    <Route element={<DetailLayout />}>
                        <Route
                            path="talent-staffing"
                            element={<TalentStaffing />}
                        />

                        <Route
                            path="ai-workforce"
                            element={<AiWorkforce />}
                        />

                        <Route
                            path="llm-workflows"
                            element={<LlmWorkflows />}
                        />

                        <Route
                            path="ai-solutions-consultant"
                            element={<AiSolutionsConsultant />}
                        />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;