import{s as i,m as r,a,U as l,j as t,b as n,r as s,Y as d,S as g}from"./index-256b01c5.js";const v=i(r.div)`
  /* background: linear-gradient(
    to right,
    ${e=>e.theme.primary} 50%,
    ${e=>e.theme.secondary} 50%
  ); */
  border-left: 2px solid ${e=>e.theme.primary};
  border-right: 2px solid ${e=>e.theme.secondary};
  z-index: 1;
  height: 100%;
`,x=i(r.div)`
  font-family: Great Vibes, cursive;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 65%;
  padding: 0em 1em;
  overflow: hidden;
  border: 2px solid;
  border-width: 4px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      ${e=>e.theme.secondary} 50%,
      ${e=>e.theme.primary} 50%
    )
    1;
  color: ${e=>e.theme.secondary};
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: "60vh";

  
  @media (max-width: 50em) {
    height: 60vh!important;
    border-image: linear-gradient(
        to bottom,
        ${e=>e.theme.secondary} 50%,
        ${e=>e.theme.primary} 50%
      )
      1;
  }
  /* ${e=>e.active?a(50)`
     height: 50%;
     top:unset;
     right:0;
     bottom:0;
     left:0;
     width: 100%;
     transition: width 0.5s ease, height 1s ease 0.5s;  
    `:a(50)`
     height: 0;
    width: 0;
    `}; */
`;l`
0%{
 width: 0px;
 height: 0px;
}
50% {
    width: 65%;
}
100% {
    width: 65%;
    height: 60vh;
}
`;const c=i(r.div)`
  width: 50%;
  min-width: 300px;
  text-align: center;
`,w=e=>t(v,{children:n(x,{active:e.active,initial:{height:0,borderWidth:0},animate:{height:"55vh",borderWidth:"3px"},transition:{type:"spring",duration:2,delay:1},children:[n(c,{children:[t("h1",{children:"Jay Jeffries"}),t("h2",{children:"Frontend Web Developer"})]}),t(c,{})]})}),f=i(r.div)`
  background: ${e=>e.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Great Vibes, cursive;

    font-weight: 500;
  }

  h2 {
    ${a(40)`
      font-size:1.2em;

  `};

    ${a(30)`
      font-size:1em;

  `};
  }
`,$=i.div`
  /* padding: 2.5em 2em; */
`;i.div`
  /* padding: 2.5em 2em; */
`;const b=i.span``,y=l`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`,u=i.div`
  position: absolute;
  cursor: pointer;
  top: ${e=>(e.active,"50%")};
  left: ${e=>e.active?"65%":"50%"};
  transform: translate(-50%, -50%);
  transition: all 1s ease;
  z-index: 100;
  border-radius: 50%;
  & > svg {
    transition: all 1s ease;
    display: block;
    fill: ${e=>e.active?e.theme.primary:e.theme.secondary};
    /* animation: ${y} infinite 1.5s linear; */
  }
  & > *:last-child {
    text-align: center;

    display: ${e=>e.active?"none":"block"};
    color: ${e=>e.active?"transparent":e.theme.secondary};
    margin-top: 1rem;
  }
  @media only screen and (max-width: 50em) {
    top: ${e=>e.active?"65%":"50%"};
    left: ${e=>(e.active,"50%")};
    width: ${e=>e.active?"150px":"80px"};
    height: ${e=>e.active?"150px":"80px"};
  }
  @media only screen and (max-width: 30em) {
    width: ${e=>e.active?"150px":"40px"};
    height: ${e=>e.active?"150px":"40px"};
  }
`,k=i.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: linear-gradient(
      to right,
      ${e=>e.theme.secondary} 50%,
      ${e=>e.theme.primary} 50%
    )
    1;
  transform: translate(-50%, -50%);
  transition: all 1s ease;

  ${e=>e.active?"transform: scale(3)":""};

  @media only screen and (max-width: 50em) {
    top: ${e=>(e.active,"50%")};
    left: ${e=>(e.active,"50%")};
    width: ${e=>e.active?"80px":"150px"};
    height: ${e=>e.active?"80px":"150px"};
  }
  @media only screen and (max-width: 30em) {
    width: ${e=>e.active?"40px":"150px"};
    height: ${e=>e.active?"40px":"150px"};
  }
`,z=i.div`
  background: #000000;
  position: absolute;
  top: 0%;
  right: 50%;
  bottom: 0%;
  width: ${e=>e.active?"100%":"0%"};
  transition: width 1s ease 0.5s;
  z-index: 1;

  ${e=>e.active?a(50)`
     height: 50%;
     right:0;
     width: 100%;
     transition: width 0.5s ease, height 1s ease 0.5s;  
    `:a(50)`
     height: 0;
    width: 0;
    `};
`,S=i.div`
  background: #fff;
  position: absolute;
  top: 0px;
  left: 50%;
  bottom: 0px;
  right: 0px;
  height: 100%;
  width: ${e=>e.active?"100%":"0%"};
  transition: width 1s ease 0.5s;
  z-index: 1;

  ${e=>e.active?a(50)`
     height: 50%;
     top:unset;
     right:0;
     bottom:0;
     left:0;
     width: 100%;
     transition: width 0.5s ease, height 1s ease 0.5s;  
    `:a(50)`
     height: 0;
    width: 0; 
    `};
`,j=()=>{const[e,m]=s.useState(!0),o=window.matchMedia("(max-width: 50em)").matches,h=o?e?150:80:e?300:120;return t(f,{transition:{duration:.5},initial:{opacity:0},animate:{opacity:1},exit:{y:-1e5},children:n(s.Suspense,{fallback:t(d,{}),children:[t(z,{active:e}),t(S,{active:e}),t(k,{active:e}),t($,{children:n(u,{bp:o,active:e,children:[t(d,{onClick:()=>m(p=>!p),width:h,height:h}),t(b,{children:"click here"})]})}),e&&t(w,{active:e}),t(g,{horizontal:o})]})},"/")};export{j as default};
