import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const modes = ["out-in", "in-out"];

export default function OutIn() {
  const [mode, setMode] = React.useState("out-in");
  const [state, setState] = React.useState(true);
  const helloRef = React.useRef(null);
  const goodbyeRef = React.useRef(null);
  const nodeRef = state ? helloRef : goodbyeRef;
  return (
    <>
      <div className="label">Mode:</div>
      <div className="modes">
        {modes.map((m) => (
          <Form.Check
            key={m}
            label={m}
            id={`mode=msContentScript${m}`}
            type="radio"
            name="mode"
            checked={mode === m}
            value={m}
            onChange={(event) => {
              setMode(event.target.value);
            }}
          />
        ))}
      </div>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef.current.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div ref={nodeRef} className="button-container">
              <Button onClick={() => setState((state) => !state)}>
                {state ? "Hello, world!" : "Goodbye, world!"}
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}
