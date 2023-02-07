"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[7370],{"../plugins/home/src/homePageComponents/RandomJoke/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Actions:()=>Actions,Content:()=>Content,ContextProvider:()=>ContextProvider,Settings:()=>Settings});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("../node_modules/@material-ui/core/esm/Button/Button.js");const Context=(0,react.createContext)(void 0),ContextProvider=props=>{const{children,defaultCategory}=props,[loading,setLoading]=react.useState(!0),[joke,setJoke]=react.useState({setup:"",punchline:""}),[type,setType]=react.useState(defaultCategory||"programming"),rerollJoke=react.useCallback((()=>{setLoading(!0),(type=>fetch(`https://official-joke-api.appspot.com/jokes${"any"!==type?`/${type}`:""}/random`).then((res=>res.json())).then((data=>Array.isArray(data)?data[0]:data)))(type).then((newJoke=>setJoke(newJoke)))}),[type]);react.useEffect((()=>{setLoading(!1)}),[joke]),react.useEffect((()=>{rerollJoke()}),[rerollJoke]);const value={loading,joke,type,rerollJoke,handleChangeType:newType=>{setType(newType)}};return(0,jsx_runtime.jsx)(Context.Provider,{value,children})},useRandomJoke=()=>{const value=react.useContext(Context);if(void 0===value)throw new Error("useRandomJoke must be used within a RandomJokeProvider");return value};try{ContextProvider.displayName="ContextProvider",ContextProvider.__docgenInfo={description:"",displayName:"ContextProvider",props:{defaultCategory:{defaultValue:null,description:"",name:"defaultCategory",required:!1,type:{name:"enum",value:[{value:'"any"'},{value:'"programming"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/RandomJoke/Context.tsx#ContextProvider"]={docgenInfo:ContextProvider.__docgenInfo,name:"ContextProvider",path:"../plugins/home/src/homePageComponents/RandomJoke/Context.tsx#ContextProvider"})}catch(__react_docgen_typescript_loader_error){}const Actions=()=>{const{rerollJoke}=useRandomJoke();return(0,jsx_runtime.jsx)(Button.Z,{variant:"contained",color:"primary",onClick:()=>rerollJoke(),children:"Reroll"})};var Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js");const Content=()=>{const{joke,loading}=useRandomJoke();return loading?(0,jsx_runtime.jsx)(Typography.Z,{paragraph:!0,children:"Loading..."}):(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Typography.Z,{paragraph:!0,children:joke.setup}),(0,jsx_runtime.jsx)(Typography.Z,{paragraph:!0,children:joke.punchline})]})};var FormControl=__webpack_require__("../node_modules/@material-ui/core/esm/FormControl/FormControl.js"),FormLabel=__webpack_require__("../node_modules/@material-ui/core/esm/FormLabel/FormLabel.js"),RadioGroup=__webpack_require__("../node_modules/@material-ui/core/esm/RadioGroup/RadioGroup.js"),FormControlLabel=__webpack_require__("../node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js"),Radio=__webpack_require__("../node_modules/@material-ui/core/esm/Radio/Radio.js"),upperFirst=__webpack_require__("../node_modules/lodash/upperFirst.js"),upperFirst_default=__webpack_require__.n(upperFirst);const Settings=()=>{const{type,handleChangeType}=useRandomJoke();return(0,jsx_runtime.jsxs)(FormControl.Z,{component:"fieldset",children:[(0,jsx_runtime.jsx)(FormLabel.Z,{component:"legend",children:"Joke Type"}),(0,jsx_runtime.jsx)(RadioGroup.Z,{"aria-label":"joke type",value:type,onChange:e=>handleChangeType(e.target.value),children:["any","programming"].map((t=>(0,jsx_runtime.jsx)(FormControlLabel.Z,{value:t,control:(0,jsx_runtime.jsx)(Radio.Z,{}),label:upperFirst_default()(t)},t)))})]})}}}]);