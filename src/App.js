import React from "react";
import { InputGroup } from "./components/compound-components/InputGroup.component";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
      const [value, setValue] = React.useState("");

      return (
            <div className="App">
                  <div className="group">
                        <InputGroup
                              id="input-1"
                              value={value}
                              onChange={(event) => setValue(event.target.value)}
                        >
                              <InputGroup.Input />
                              <InputGroup.Label className="label">
                                    {" "}
                                    Amount
                              </InputGroup.Label>
                        </InputGroup>
                  </div>
                  <div className="group">
                        <InputGroup
                              id="input-1"
                              value={value}
                              onChange={(event) => setValue(event.target.value)}
                        >
                              <InputGroup.Label className="bg-dark">
                                    Search
                              </InputGroup.Label>
                              <InputGroup.Input />
                              <InputGroup.Item>
                                    <AiOutlineSearch />
                              </InputGroup.Item>
                        </InputGroup>
                  </div>
            </div>
      );
}

export default App;
