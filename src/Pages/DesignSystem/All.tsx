import { Code } from "../../Components"
import ComponentSearch from "./ComponentSearch";

const All = () => {
  return (
    <div>
      <h2>Installation</h2>
      <div>
        <h3>
          Install react-retro
        </h3>
        <Code withCopy>
          {`npm i react-retro`}
        </Code>
      </div>
      <div>
        <h3>Add the Nunito font</h3>
        <p>Add the following Google Web Fonts DCN links to your project's head tag:</p>
        <Code variant="block" withCopy>
          {`<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">`}
        </Code>
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <ComponentSearch />
      </div>
    </div>
  )
}

export default All