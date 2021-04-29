import React, { Suspense } from "react";
import { Container } from "reactstrap";
import "./App.css";
import Home from "./features/Home";

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>loading...</div>}>
                <Container>
                    <Home />
                </Container>
            </Suspense>
        </div>
    );
}

export default App;
