// import React from 'react';
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ContextCarrito } from "./context/ContextCarrito.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
<ContextCarrito>
    <AppRoutes />
</ContextCarrito>
)
;
