import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import Alert from "./components/Alert";
import Back from "./components/Back";
const App = () => {
  return (
    <div>
      <Back />
      <Navbar />
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div id="pos-article-display-card-93243"></div>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
          <Alert />
          <div className="flex items-center justify-center gray-200 dark:gray-700 mb-4 ">
            <Form />
          </div>
        </div>
        <div id="pos-article-display-93242"></div>
        <div id="pos-article-text-93241"></div>
      </div>
    </div>
  );
};

export default App;
