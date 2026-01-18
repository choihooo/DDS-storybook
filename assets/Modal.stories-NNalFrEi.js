import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as i,c as W}from"./Button-DMFs1kJ0.js";import{R as c,r as l}from"./iframe-B37sAdoJ.js";import{a as D}from"./index-CJceeV3S.js";import"./preload-helper-PPVm8Dsz.js";function V({state:n,send:t,ctx:r}){return{overlayProps:{onClick:s=>{s.target===s.currentTarget&&r.closeOnOverlayClick&&t({type:"CLOSE",payload:{source:"overlay"}})},"data-open":n.isOpen,"data-closing":n.isClosing},contentProps:{role:"dialog","aria-modal":!0,onKeyDown:s=>{s.key==="Escape"&&r.closeOnEscape&&t({type:"CLOSE",payload:{source:"escape"}})},onClick:s=>{s.stopPropagation()}},closeButtonProps:{onClick:()=>{t({type:"CLOSE",payload:{source:"button"}})},"aria-label":"닫기"}}}function $(n){const{open:t=!1,onOpenChange:r,closeOnOverlayClick:s=!0,closeOnEscape:d=!0}=n,u=c.useRef(r);c.useEffect(()=>{u.current=r},[r]);const[a,g]=c.useState({isOpen:t,isClosing:!1});c.useEffect(()=>{t&&!a.isOpen?g({isOpen:!0,isClosing:!1}):!t&&a.isOpen&&!a.isClosing&&g(p=>({...p,isClosing:!0}))},[t,a.isOpen,a.isClosing]),c.useEffect(()=>{if(a.isClosing){const p=setTimeout(()=>{g({isOpen:!1,isClosing:!1}),u.current?.(!1)},200);return()=>clearTimeout(p)}},[a.isClosing]);const I=c.useCallback(p=>{p.type==="CLOSE"&&a.isOpen&&!a.isClosing&&g(L=>({...L,isClosing:!0}))},[a.isOpen,a.isClosing]),A=c.useMemo(()=>({closeOnOverlayClick:s,closeOnEscape:d,onOpenChange:p=>{u.current?.(p)}}),[s,d]);return c.useEffect(()=>{if(a.isOpen){const p=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=p}}},[a.isOpen]),c.useMemo(()=>({...V({state:a,send:I,ctx:A}),isClosing:a.isClosing}),[a,I,A])}const K=["fixed inset-0 z-[1000] flex items-center justify-center","bg-black/60","transition-opacity duration-200 ease-in-out","opacity-0 pointer-events-none","data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto","data-[closing=true]:opacity-0"],G=["relative bg-white rounded-[20px] p-6","max-w-[90vw] max-h-[90vh] overflow-auto","shadow-[0_0_8px_0_rgba(0,0,0,0.10),0_0_20px_0_rgba(0,0,0,0.10)]","transition-transform duration-200 ease-in-out","scale-95","data-[open=true]:scale-100","data-[closing=true]:scale-95"],J={small:"w-[400px]",medium:"w-[600px]",large:"w-[800px]"},Q=["absolute top-4 right-4","w-8 h-8","flex items-center justify-center","border-none bg-transparent rounded cursor-pointer","text-gray-600","transition-colors duration-150 ease-in-out","hover:bg-gray-50","active:bg-gray-100","focus-visible:outline-2 focus-visible:outline-gray-700 focus-visible:outline-offset-2"],U=["mt-0 mb-4 text-xl font-semibold leading-7 text-gray-900"],F=l.createContext(null);function P(){const n=l.useContext(F);if(!n)throw new Error("Modal compound components must be used within Modal.Root");return n}function N({open:n,onOpenChange:t,closeOnOverlayClick:r=!0,closeOnEscape:s=!0,size:d="medium",children:u}){const a=$({open:n,onOpenChange:t,closeOnOverlayClick:r,closeOnEscape:s});if(!n&&!a.isClosing)return null;const g={open:n,api:a,size:d};return e.jsx(F.Provider,{value:g,children:u})}function _({className:n,children:t,...r}){const{api:s,open:d}=P();return e.jsx("div",{...s.overlayProps,"data-open":d,"data-closing":s.isClosing,className:W(K,n),...r,children:t})}function H({className:n,children:t,...r}){const{api:s,open:d,size:u}=P();return e.jsx("div",{...s.contentProps,"data-open":d,"data-closing":s.isClosing,className:W(G,J[u],n),...r,children:t})}function q({className:n,children:t,...r}){const{api:s}=P();return e.jsx("button",{...s.closeButtonProps,className:W(Q,n),...r,children:t??e.jsx(D.Close,{size:"md"})})}function X({className:n,children:t,...r}){return e.jsx("h2",{className:W(U,n),...r,children:t})}function o({showCloseButton:n=!0,children:t,actionButton:r,...s}){return e.jsx(N,{...s,children:e.jsx(_,{children:e.jsxs(H,{children:[n&&e.jsx(q,{}),t,r&&e.jsx("div",{style:{marginTop:"32px",display:"flex"},children:e.jsx(i,{variant:"primary",onClick:r.onClick,leftIcon:r.leftIcon,rightIcon:r.rightIcon,full:!0,children:r.label})})]})})})}o.Root=N;o.Overlay=_;o.Content=H;o.CloseButton=q;o.Header=X;o.__docgenInfo={description:"",methods:[{name:"Root",docblock:null,modifiers:["static"],params:[{name:`{
  open,
  onOpenChange,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  size = "medium",
  children,
}: ModalRootProps`,optional:!1,type:{name:"ModalRootProps",alias:"ModalRootProps"}}],returns:null},{name:"Overlay",docblock:null,modifiers:["static"],params:[{name:"{ className, children, ...rest }: ModalOverlayProps",optional:!1,type:{name:"ModalOverlayProps",alias:"ModalOverlayProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ className, children, ...rest }: ModalContentProps",optional:!1,type:{name:"ModalContentProps",alias:"ModalContentProps"}}],returns:null},{name:"CloseButton",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  ...rest
}: ModalCloseButtonProps`,optional:!1,type:{name:"ModalCloseButtonProps",alias:"ModalCloseButtonProps"}}],returns:null},{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ className, children, ...rest }: ModalHeaderProps",optional:!1,type:{name:"ModalHeaderProps",alias:"ModalHeaderProps"}}],returns:null}],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:""},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actionButton:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"leftIcon",value:{name:"ReactNode",required:!1}},{key:"rightIcon",value:{name:"ReactNode",required:!1}}]}},description:""}}};const re={title:"Components/Modal",component:o,args:{open:!1,children:"모달 내용"},argTypes:{open:{control:"boolean",description:"모달 열림/닫힘 상태"},size:{control:"select",options:["small","medium","large"],description:"모달 크기"},closeOnOverlayClick:{control:"boolean",description:"오버레이 클릭 시 닫기 여부"},closeOnEscape:{control:"boolean",description:"ESC 키로 닫기 여부"},showCloseButton:{control:"boolean",description:"닫기 버튼 표시 여부"}},parameters:{docs:{description:{component:`
Modal 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받을 때 사용합니다.

## 주요 기능

- **크기 옵션**: small (400px), medium (600px), large (800px)
- **닫기 방법**: 오버레이 클릭, ESC 키, 닫기 버튼
- **애니메이션**: 열기/닫기 시 부드러운 전환 효과
- **접근성**: ARIA 속성 지원, 키보드 네비게이션 지원

## 사용 방법

### 기본 사용법

\`\`\`tsx
<Modal open={open} onOpenChange={setOpen}>
  <div>모달 내용</div>
</Modal>
\`\`\`

### 컴파운드 패턴

더 유연한 구조를 위해 컴파운드 패턴을 사용할 수 있습니다:

\`\`\`tsx
<Modal.Root open={open} onOpenChange={setOpen}>
  <Modal.Overlay>
    <Modal.Content>
      <Modal.CloseButton />
      <div>커스텀 레이아웃</div>
    </Modal.Content>
  </Modal.Overlay>
</Modal.Root>
\`\`\`
        `}}}};function m({children:n,...t}){const[r,s]=l.useState(t.open);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>s(!0),children:"모달 열기"}),e.jsx(o,{...t,open:r,onOpenChange:s,children:n})]})}const x={render:n=>e.jsx(m,{...n}),args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"모달 제목"}),e.jsx("p",{style:{margin:0},children:"이것은 기본 모달입니다. 내용을 여기에 작성할 수 있습니다."})]})}},h={render:n=>e.jsx(m,{...n}),args:{size:"small",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"작은 모달"}),e.jsx("p",{style:{margin:0},children:"작은 크기의 모달입니다 (400px)."})]})}},y={render:n=>e.jsx(m,{...n}),args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"중간 모달"}),e.jsx("p",{style:{margin:0},children:"중간 크기의 모달입니다 (600px)."})]})}},C={render:n=>e.jsx(m,{...n}),args:{size:"large",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"큰 모달"}),e.jsx("p",{style:{margin:0},children:"큰 크기의 모달입니다 (800px)."})]})}},f={render:n=>e.jsx(m,{...n}),args:{size:"medium",showCloseButton:!1,children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"닫기 버튼 없음"}),e.jsx("p",{style:{margin:0},children:"이 모달은 닫기 버튼이 없습니다. 오버레이 클릭이나 ESC 키로만 닫을 수 있습니다."})]})}},v={render:n=>e.jsx(m,{...n}),args:{size:"medium",closeOnOverlayClick:!1,children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"오버레이 클릭 비활성화"}),e.jsx("p",{style:{margin:0},children:"이 모달은 오버레이 클릭으로 닫을 수 없습니다. 닫기 버튼이나 ESC 키만 사용할 수 있습니다."})]})}},j={render:n=>e.jsx(m,{...n}),args:{size:"medium",closeOnEscape:!1,children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"ESC 키 비활성화"}),e.jsx("p",{style:{margin:0},children:"이 모달은 ESC 키로 닫을 수 없습니다. 닫기 버튼이나 오버레이 클릭만 사용할 수 있습니다."})]})}},O={render:n=>e.jsx(m,{...n}),args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"긴 내용"}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("p",{children:"이 모달은 스크롤 가능한 긴 내용을 포함합니다."}),Array.from({length:20},(n,t)=>e.jsxs("p",{style:{margin:"8px 0"},children:[t+1,"번째 문단입니다. 모달의 최대 높이는 90vh로 제한되며, 내용이 길 경우 자동으로 스크롤됩니다."]},`paragraph-${t+1}`))]})]})}},B={render:n=>e.jsx(m,{...n}),args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"폼 예제"}),e.jsxs("form",{onSubmit:n=>{n.preventDefault(),alert("제출되었습니다!")},children:[e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{htmlFor:"name",style:{display:"block",marginBottom:"8px"},children:"이름"}),e.jsx("input",{id:"name",type:"text",style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{marginBottom:"16px"},children:[e.jsx("label",{htmlFor:"email",style:{display:"block",marginBottom:"8px"},children:"이메일"}),e.jsx("input",{id:"email",type:"email",style:{width:"100%",padding:"8px",border:"1px solid #ccc",borderRadius:"4px"}})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end"},children:[e.jsx(i,{variant:"default",type:"button",children:"취소"}),e.jsx(i,{variant:"primary",type:"submit",children:"제출"})]})]})]})}},b={render:n=>{const[t,r]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"모달 열기"}),e.jsx(o,{...n,open:t,onOpenChange:r,actionButton:{label:"119 신고하기",onClick:()=>{alert("119에 신고되었습니다!"),r(!1)}},children:n.children})]})},args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"맞아요!"}),e.jsx("p",{style:{margin:0},children:"119에 도움을 요청해보세요!"})]})}},M={render:n=>{const[t,r]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"모달 열기"}),e.jsx(o,{...n,open:t,onOpenChange:r,actionButton:{label:"119 신고하기",leftIcon:e.jsx("span",{style:{fontSize:"18px"},children:"📞"}),onClick:()=>{alert("119에 신고되었습니다!"),r(!1)}},children:n.children})]})},args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"맞아요!"}),e.jsx("p",{style:{margin:0},children:"119에 도움을 요청해보세요! (왼쪽 아이콘 포함)"})]})}},S={render:n=>{const[t,r]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>r(!0),children:"모달 열기"}),e.jsx(o,{...n,open:t,onOpenChange:r,actionButton:{label:"다음 단계",rightIcon:e.jsx("span",{style:{fontSize:"18px"},children:"→"}),onClick:()=>{alert("다음 단계로 이동합니다!"),r(!1)}},children:n.children})]})},args:{size:"medium",children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"진행하시겠어요?"}),e.jsx("p",{style:{margin:0},children:"다음 단계로 진행하려면 버튼을 클릭하세요. (오른쪽 아이콘 포함)"})]})}},k={render:()=>{const n=["small","medium","large"];return e.jsx("div",{style:{padding:"24px"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"Size"}),e.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"Preview"})]})}),e.jsx("tbody",{children:n.map(t=>{const r=()=>{const[s,d]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>d(!0),children:"모달 열기"}),e.jsx(o,{size:t,open:s,onOpenChange:d,children:e.jsxs("div",{children:[e.jsxs("h3",{style:{marginTop:0,marginBottom:"8px"},children:[t," 모달"]}),e.jsx("p",{style:{margin:0},children:t==="small"?"작은 크기의 모달입니다.":t==="medium"?"중간 크기의 모달입니다.":"큰 크기의 모달입니다."})]})})]})};return e.jsxs("tr",{children:[e.jsxs("td",{style:{padding:"16px",fontSize:"14px",fontWeight:500,color:"#374151",borderBottom:"1px solid #e5e7eb",verticalAlign:"middle"},children:[t," (",t==="small"?"400px":t==="medium"?"600px":"800px",")"]}),e.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:e.jsx(r,{})})]},t)})})]})})}},z={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"컴파운드 패턴 모달 열기"}),e.jsx(o.Root,{open:n,onOpenChange:t,size:"medium",children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{children:[e.jsx(o.CloseButton,{}),e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"컴파운드 패턴"}),e.jsx("p",{style:{margin:0},children:"이 모달은 컴파운드 패턴으로 구성되었습니다. 각 부분을 독립적으로 제어할 수 있어 더 유연한 레이아웃이 가능합니다."})]})]})})})]})}},T={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"커스텀 레이아웃 모달 열기"}),e.jsx(o.Root,{open:n,onOpenChange:t,size:"large",children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"24px"},children:[e.jsx("h2",{style:{margin:0},children:"커스텀 레이아웃"}),e.jsx(o.CloseButton,{})]}),e.jsxs("div",{children:[e.jsx("p",{children:"닫기 버튼을 상단 오른쪽이 아닌 다른 위치에 배치할 수 있습니다."}),e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",marginTop:"24px"},children:[e.jsx(i,{variant:"default",onClick:()=>t(!1),children:"취소"}),e.jsx(i,{variant:"primary",onClick:()=>t(!1),children:"확인"})]})]})]})})})]})}},R={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"닫기 버튼 없는 모달 열기"}),e.jsx(o.Root,{open:n,onOpenChange:t,size:"medium",children:e.jsx(o.Overlay,{children:e.jsx(o.Content,{children:e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"닫기 버튼 없음"}),e.jsx("p",{style:{margin:0},children:"컴파운드 패턴을 사용하면 닫기 버튼을 아예 렌더링하지 않을 수 있습니다."}),e.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",marginTop:"24px"},children:e.jsx(i,{variant:"primary",onClick:()=>t(!1),children:"확인"})})]})})})})]})}},w={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"커스텀 오버레이 모달 열기"}),e.jsx(o.Root,{open:n,onOpenChange:t,size:"medium",children:e.jsx(o.Overlay,{style:{backgroundColor:"rgba(0, 0, 0, 0.7)"},children:e.jsxs(o.Content,{children:[e.jsx(o.CloseButton,{}),e.jsxs("div",{children:[e.jsx("h2",{style:{marginTop:0,marginBottom:"16px"},children:"커스텀 오버레이"}),e.jsx("p",{style:{margin:0},children:"오버레이의 스타일을 커스터마이징할 수 있습니다."})]})]})})})]})}},E={render:()=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(i,{onClick:()=>t(!0),children:"헤더 있는 모달 열기"}),e.jsx(o.Root,{open:n,onOpenChange:t,size:"medium",children:e.jsx(o.Overlay,{children:e.jsxs(o.Content,{children:[e.jsx(o.CloseButton,{}),e.jsx(o.Header,{children:"모달 제목"}),e.jsx("p",{style:{margin:0},children:"Modal.Header 컴포넌트를 사용하여 일관된 스타일의 제목을 표시할 수 있습니다."})]})})})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>모달 제목</h2>
        <p style={{
        margin: 0
      }}>
          이것은 기본 모달입니다. 내용을 여기에 작성할 수 있습니다.
        </p>
      </div>
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "small",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>작은 모달</h2>
        <p style={{
        margin: 0
      }}>작은 크기의 모달입니다 (400px).</p>
      </div>
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>중간 모달</h2>
        <p style={{
        margin: 0
      }}>중간 크기의 모달입니다 (600px).</p>
      </div>
  }
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "large",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>큰 모달</h2>
        <p style={{
        margin: 0
      }}>큰 크기의 모달입니다 (800px).</p>
      </div>
  }
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    showCloseButton: false,
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>닫기 버튼 없음</h2>
        <p style={{
        margin: 0
      }}>
          이 모달은 닫기 버튼이 없습니다. 오버레이 클릭이나 ESC 키로만 닫을 수
          있습니다.
        </p>
      </div>
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    closeOnOverlayClick: false,
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>
          오버레이 클릭 비활성화
        </h2>
        <p style={{
        margin: 0
      }}>
          이 모달은 오버레이 클릭으로 닫을 수 없습니다. 닫기 버튼이나 ESC 키만
          사용할 수 있습니다.
        </p>
      </div>
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    closeOnEscape: false,
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>ESC 키 비활성화</h2>
        <p style={{
        margin: 0
      }}>
          이 모달은 ESC 키로 닫을 수 없습니다. 닫기 버튼이나 오버레이 클릭만
          사용할 수 있습니다.
        </p>
      </div>
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>긴 내용</h2>
        <div style={{
        marginBottom: "16px"
      }}>
          <p>이 모달은 스크롤 가능한 긴 내용을 포함합니다.</p>
          {Array.from({
          length: 20
        }, (_, i) => <p key={\`paragraph-\${i + 1}\`} style={{
          margin: "8px 0"
        }}>
              {i + 1}번째 문단입니다. 모달의 최대 높이는 90vh로 제한되며, 내용이
              길 경우 자동으로 스크롤됩니다.
            </p>)}
        </div>
      </div>
  }
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <ModalWrapper {...args} />,
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>폼 예제</h2>
        <form onSubmit={e => {
        e.preventDefault();
        alert("제출되었습니다!");
      }}>
          <div style={{
          marginBottom: "16px"
        }}>
            <label htmlFor="name" style={{
            display: "block",
            marginBottom: "8px"
          }}>
              이름
            </label>
            <input id="name" type="text" style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }} />
          </div>
          <div style={{
          marginBottom: "16px"
        }}>
            <label htmlFor="email" style={{
            display: "block",
            marginBottom: "8px"
          }}>
              이메일
            </label>
            <input id="email" type="email" style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px"
          }} />
          </div>
          <div style={{
          display: "flex",
          gap: "8px",
          justifyContent: "flex-end"
        }}>
            <Button variant="default" type="button">
              취소
            </Button>
            <Button variant="primary" type="submit">
              제출
            </Button>
          </div>
        </form>
      </div>
  }
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal {...args} open={open} onOpenChange={setOpen} actionButton={{
        label: "119 신고하기",
        onClick: () => {
          alert("119에 신고되었습니다!");
          setOpen(false);
        }
      }}>
          {args.children}
        </Modal>
      </>;
  },
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>맞아요!</h2>
        <p style={{
        margin: 0
      }}>119에 도움을 요청해보세요!</p>
      </div>
  }
}`,...b.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal {...args} open={open} onOpenChange={setOpen} actionButton={{
        label: "119 신고하기",
        leftIcon: <span style={{
          fontSize: "18px"
        }}>📞</span>,
        onClick: () => {
          alert("119에 신고되었습니다!");
          setOpen(false);
        }
      }}>
          {args.children}
        </Modal>
      </>;
  },
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>맞아요!</h2>
        <p style={{
        margin: 0
      }}>
          119에 도움을 요청해보세요! (왼쪽 아이콘 포함)
        </p>
      </div>
  }
}`,...M.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>모달 열기</Button>
        <Modal {...args} open={open} onOpenChange={setOpen} actionButton={{
        label: "다음 단계",
        rightIcon: <span style={{
          fontSize: "18px"
        }}>→</span>,
        onClick: () => {
          alert("다음 단계로 이동합니다!");
          setOpen(false);
        }
      }}>
          {args.children}
        </Modal>
      </>;
  },
  args: {
    size: "medium",
    children: <div>
        <h2 style={{
        marginTop: 0,
        marginBottom: "16px"
      }}>진행하시겠어요?</h2>
        <p style={{
        margin: 0
      }}>
          다음 단계로 진행하려면 버튼을 클릭하세요. (오른쪽 아이콘 포함)
        </p>
      </div>
  }
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizes = ["small", "medium", "large"] as const;
    return <div style={{
      padding: "24px"
    }}>
        <table style={{
        borderCollapse: "collapse",
        width: "100%"
      }}>
          <thead>
            <tr>
              <th style={{
              padding: "12px",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: 600,
              color: "#111827",
              borderBottom: "1px solid #e5e7eb"
            }}>
                Size
              </th>
              <th style={{
              padding: "12px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 600,
              color: "#111827",
              borderBottom: "1px solid #e5e7eb"
            }}>
                Preview
              </th>
            </tr>
          </thead>
          <tbody>
            {sizes.map(size => {
            const SizeRow = () => {
              const [open, setOpen] = useState(false);
              return <>
                    <Button onClick={() => setOpen(true)}>모달 열기</Button>
                    <Modal size={size} open={open} onOpenChange={setOpen}>
                      <div>
                        <h3 style={{
                      marginTop: 0,
                      marginBottom: "8px"
                    }}>
                          {size} 모달
                        </h3>
                        <p style={{
                      margin: 0
                    }}>
                          {size === "small" ? "작은 크기의 모달입니다." : size === "medium" ? "중간 크기의 모달입니다." : "큰 크기의 모달입니다."}
                        </p>
                      </div>
                    </Modal>
                  </>;
            };
            return <tr key={size}>
                  <td style={{
                padding: "16px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
                borderBottom: "1px solid #e5e7eb",
                verticalAlign: "middle"
              }}>
                    {size} (
                    {size === "small" ? "400px" : size === "medium" ? "600px" : "800px"}
                    )
                  </td>
                  <td style={{
                padding: "16px",
                textAlign: "center",
                borderBottom: "1px solid #e5e7eb"
              }}>
                    <SizeRow />
                  </td>
                </tr>;
          })}
          </tbody>
        </table>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>컴파운드 패턴 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton />
              <div>
                <h2 style={{
                marginTop: 0,
                marginBottom: "16px"
              }}>
                  컴파운드 패턴
                </h2>
                <p style={{
                margin: 0
              }}>
                  이 모달은 컴파운드 패턴으로 구성되었습니다. 각 부분을
                  독립적으로 제어할 수 있어 더 유연한 레이아웃이 가능합니다.
                </p>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>;
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>커스텀 레이아웃 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="large">
          <Modal.Overlay>
            <Modal.Content>
              <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "24px"
            }}>
                <h2 style={{
                margin: 0
              }}>커스텀 레이아웃</h2>
                <Modal.CloseButton />
              </div>
              <div>
                <p>
                  닫기 버튼을 상단 오른쪽이 아닌 다른 위치에 배치할 수 있습니다.
                </p>
                <div style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
                marginTop: "24px"
              }}>
                  <Button variant="default" onClick={() => setOpen(false)}>
                    취소
                  </Button>
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    확인
                  </Button>
                </div>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>;
  }
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>닫기 버튼 없는 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay>
            <Modal.Content>
              <div>
                <h2 style={{
                marginTop: 0,
                marginBottom: "16px"
              }}>
                  닫기 버튼 없음
                </h2>
                <p style={{
                margin: 0
              }}>
                  컴파운드 패턴을 사용하면 닫기 버튼을 아예 렌더링하지 않을 수
                  있습니다.
                </p>
                <div style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
                marginTop: "24px"
              }}>
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    확인
                  </Button>
                </div>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>;
  }
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>커스텀 오버레이 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)" // 더 어두운 오버레이
        }}>
            <Modal.Content>
              <Modal.CloseButton />
              <div>
                <h2 style={{
                marginTop: 0,
                marginBottom: "16px"
              }}>
                  커스텀 오버레이
                </h2>
                <p style={{
                margin: 0
              }}>
                  오버레이의 스타일을 커스터마이징할 수 있습니다.
                </p>
              </div>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>;
  }
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>헤더 있는 모달 열기</Button>
        <Modal.Root open={open} onOpenChange={setOpen} size="medium">
          <Modal.Overlay>
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>모달 제목</Modal.Header>
              <p style={{
              margin: 0
            }}>
                Modal.Header 컴포넌트를 사용하여 일관된 스타일의 제목을 표시할
                수 있습니다.
              </p>
            </Modal.Content>
          </Modal.Overlay>
        </Modal.Root>
      </>;
  }
}`,...E.parameters?.docs?.source}}};const oe=["Default","Small","Medium","Large","WithoutCloseButton","DisableOverlayClick","DisableEscape","LongContent","WithForm","WithActionButton","WithActionButtonLeftIcon","WithActionButtonRightIcon","AllSizes","CompoundPattern","CompoundCustomLayout","CompoundWithoutCloseButton","CompoundWithCustomOverlay","CompoundWithHeader"];export{k as AllSizes,T as CompoundCustomLayout,z as CompoundPattern,w as CompoundWithCustomOverlay,E as CompoundWithHeader,R as CompoundWithoutCloseButton,x as Default,j as DisableEscape,v as DisableOverlayClick,C as Large,O as LongContent,y as Medium,h as Small,b as WithActionButton,M as WithActionButtonLeftIcon,S as WithActionButtonRightIcon,B as WithForm,f as WithoutCloseButton,oe as __namedExportsOrder,re as default};
