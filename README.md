# ReactDemo1 (based on Dave Gray course)

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## [React JS Full Course for Beginners](https://www.youtube.com/watch?v=RVFAyFWO4go)

[gitrepo](https://github.com/gitdagray/react_resources)

```
(0:00:00) Intro
(0:00:48) Chapter 1: Start Here
(0:13:56) Chapter 2: App & JSX
(0:25:28) Chapter 3: Functional Components
	Mentions: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?utm_source=ext_app_menu)
(0:36:01) Chapter 4: Applying CSS Styles
	Mentions: Global CSS, inline CSS & [Styled Components](https://styled-components.com/).
(0:43:11) Chapter 5: Click Events
	Uses: onClick events
		- [SyntheticEvent: Mouse Events - onClick (oldDocs)](https://legacy.reactjs.org/docs/events.html#mouse-events)
		- [API Components: MouseEvent handler function - onClick](https://react.dev/reference/react-dom/components/common#mouseevent-handler)
	See file src/Content.jsx for the code explained within this Chapter.
(0:51:55) Chapter 6: useState Hook
	Explains [useState](https://react.dev/reference/react/useState)
	See file src/Content.jsx changes for code explained within this Chapter.
(1:03:23) Chapter 7: Lists & Keys
	Explains how to create lists and continue use click & events.
	Uses:
		- https://react-icons.github.io/react-icons/icons?name=rx
		- [onChange Form Events (from SyntheticEvent)](https://legacy.reactjs.org/docs/events.html#form-events)
		- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
	See file src/Content.jsx changes for code explained within this Chapter.
(1:35:50) Chapter 8: Props & Prop Drilling
	Lots of changes to pass on props and component redesign.
(2:01:19) Chapter 9: Controlled Component Inputs
	How to handle forms within React. Also [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs) & [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs).
	Additional video from Dave [BUILD a React Timer with useRef](https://www.youtube.com/watch?v=s6UAuFzL308) & it's [github repo](https://github.com/gitdagray/useref_tut).
(2:38:25) Chapter 10: Project Challenge
(3:03:44) Chapter 11: useEffect Hook
	How to use useEffect Hook in React: [useEffect](https://react.dev/reference/react/useEffect).
	With the useEffect Hook we can trigger a behavior when an state/variable changes.
(3:15:08) Chapter 12: JSON Server
(3:21:23) Chapter 13: Fetch API Data
(3:44:37) Chapter 14: CRUD Operations
(4:04:33) Chapter 15: Fetch Data Challenge
(4:43:10) Chapter 16: React Router
	* <---- CONTINUE HERE
(5:02:58) Chapter 17: Router Hooks & Links
(5:51:28) Chapter 18: Flexbox Components
(6:02:34) Chapter 19: Axios API Requests
(6:40:47) Chapter 20: Custom Hooks
(7:17:04) Chapter 21: Context API & useContext Hook
(7:56:10) Chapter 22: Easy Peasy Redux
(8:33:39) Chapter 23: Build & Deploy Your React Apps
```

## Interesting topics

- [React Fragments](https://refine.dev/blog/how-react-fragments-is-works/): React Fragment were introduced in version 16.2 of the library. They allow to return in the render method one component with childs avoiding using a basic HTML tag like `<div>`.

## For later

- [JSX.Element vs ReactElement vs ReactNode](https://dev.to/fromaline/jsxelement-vs-reactelement-vs-reactnode-2mh2): Typescript data types distictions related to JSX.
- [React Lists and Keys](https://legacy.reactjs.org/docs/lists-and-keys.html)
