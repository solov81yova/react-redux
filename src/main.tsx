import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"

import GlobalStyles from "styles/GlobalStyles"
import { store } from "store/store"


import App from "./App"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <Provider store={store}>
      <GlobalStyles/>
      <App />
    </Provider>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
