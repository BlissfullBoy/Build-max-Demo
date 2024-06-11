import About from './project_file/About';
import Contactus from './project_file/Contactus';
import Headersection from './project_file/Headersection';
import Last from './project_file/Last';
import Servicesection from './project_file/Servicesection';
import Test from './project_file/Test';
import Topdetails from './project_file/Topdetails';
import Map from './project_file/Map';
import Projectslider from './project_file/project';
import "./project_file/Media.css"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div>
      <Topdetails></Topdetails>
      <Headersection></Headersection>
      <Servicesection></Servicesection>
      <About></About>
      <Projectslider></Projectslider>
      <Test></Test>
      <Contactus></Contactus>
      <Map></Map>
      <Last></Last>
    </div>
  );
}
export default App;
