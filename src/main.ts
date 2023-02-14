import { setupCounter } from "./counter";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
