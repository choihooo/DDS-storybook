import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as c}from"./index-MrHY3-sW.js";const t={white:"#FFF",G:{75:"#E4E5EA",600:"#4B5169"},O:{600:"#E86025"}};var f={default:"_2geiub1 _2geiub0",gray:"_2geiub2 _2geiub0",primary:"_2geiub3 _2geiub0"},g="_2geiub4",y="_2geiub5",v="_2geiub6",m="_2geiub7";function o({variant:s="default",full:n=!1,leftIcon:p,rightIcon:x,className:u,children:d,...h}){const b=[f[s],n?g:void 0,u].filter(Boolean).join(" ");return e.jsx("button",{type:"button",className:b,...h,children:p?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:y,children:p}),d,e.jsx("span",{className:m})]}):x?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:m}),d,e.jsx("span",{className:v,children:x})]}):d})}o.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "gray" | "primary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"gray"'},{name:"literal",value:'"primary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},full:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const B={title:"Components/Button",component:o,args:{children:"Text"},argTypes:{variant:{control:"select",options:["default","gray","primary"]},full:{control:"boolean"},disabled:{control:"boolean"}},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},docs:{description:{component:`
Button 컴포넌트는 다양한 variant와 상태를 지원합니다.

## 알려진 접근성 이슈

### Primary 버튼 색상 대비 경고

**이슈:**
- Primary 버튼: O[500] (#FF6929) 배경 + white (#ffffff) 텍스트
- 현재 대비 비율: **2.87:1**
- WCAG AA 기준: **4.5:1** 필요
- **결과: WCAG AA 기준 미달**

**상태:**
- 디자이너 확정 디자인으로 인해 현재 색상 유지
- Accessibility 탭에서 경고로 표시되지만, 디자인 결정 사항으로 문서화

**향후 계획:**
- 디자이너와 협의하여 색상 조정 검토
- 권장 대안: O[600] (#E86025) 사용 시 대비 6.13:1 (AA 통과)
        `}}}},r={render:()=>{const s=[{label:"default",variant:"default",withIcon:!1},{label:"gray",variant:"gray",withIcon:!1},{label:"primary",variant:"primary",withIcon:!1},{label:"primary",variant:"primary",withIcon:!0}];return e.jsx("div",{style:{padding:"24px"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"Button"}),e.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"default"}),e.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"pressed"}),e.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"disabled"})]})}),e.jsx("tbody",{children:s.map(n=>e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"16px",fontSize:"14px",fontWeight:500,color:"#374151",borderBottom:"1px solid #e5e7eb",verticalAlign:"middle"},children:n.label}),e.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(o,{variant:n.variant,leftIcon:n.withIcon?e.jsx(c,{name:"Noti",size:"md",color:"white"}):void 0,style:n.withIcon?{minWidth:"140px"}:void 0,children:"Text"})})}),e.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(o,{variant:n.variant,leftIcon:n.withIcon?e.jsx(c,{name:"Noti",size:"md",color:"white"}):void 0,style:{...n.withIcon?{minWidth:"140px"}:{},pointerEvents:"none",backgroundColor:n.variant==="default"?t.G[75]:n.variant==="gray"?t.G[600]:t.O[600],color:n.variant==="default"?t.G[600]:t.white},children:"Text"})})}),e.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:e.jsx("div",{style:{display:"inline-block"},children:e.jsx(o,{variant:n.variant,leftIcon:n.withIcon?e.jsx(c,{name:"Noti",size:"md",color:"white"}):void 0,disabled:!0,style:n.withIcon?{minWidth:"140px"}:void 0,children:"Text"})})})]},n.label))})]})})}},a={args:{variant:"default"}},i={args:{variant:"gray"}},l={args:{variant:"primary"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const buttonRows = [{
      label: "default",
      variant: "default" as const,
      withIcon: false
    }, {
      label: "gray",
      variant: "gray" as const,
      withIcon: false
    }, {
      label: "primary",
      variant: "primary" as const,
      withIcon: false
    }, {
      label: "primary",
      variant: "primary" as const,
      withIcon: true
    }];
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
                Button
              </th>
              <th style={{
              padding: "12px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 600,
              color: "#111827",
              borderBottom: "1px solid #e5e7eb"
            }}>
                default
              </th>
              <th style={{
              padding: "12px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 600,
              color: "#111827",
              borderBottom: "1px solid #e5e7eb"
            }}>
                pressed
              </th>
              <th style={{
              padding: "12px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 600,
              color: "#111827",
              borderBottom: "1px solid #e5e7eb"
            }}>
                disabled
              </th>
            </tr>
          </thead>
          <tbody>
            {buttonRows.map(row => <tr key={row.label}>
                <td style={{
              padding: "16px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#374151",
              borderBottom: "1px solid #e5e7eb",
              verticalAlign: "middle"
            }}>
                  {row.label}
                </td>
                <td style={{
              padding: "16px",
              textAlign: "center",
              borderBottom: "1px solid #e5e7eb"
            }}>
                  <div style={{
                display: "inline-block"
              }}>
                    <Button variant={row.variant} leftIcon={row.withIcon ? <Icon name="Noti" size="md" color="white" /> : undefined} style={row.withIcon ? {
                  minWidth: "140px" // 아이콘(24px) + 간격(16px) + 텍스트 + 패딩(32px)
                } : undefined}>
                      Text
                    </Button>
                  </div>
                </td>
                <td style={{
              padding: "16px",
              textAlign: "center",
              borderBottom: "1px solid #e5e7eb"
            }}>
                  <div style={{
                display: "inline-block"
              }}>
                    <Button variant={row.variant} leftIcon={row.withIcon ? <Icon name="Noti" size="md" color="white" /> : undefined} style={{
                  ...(row.withIcon ? {
                    minWidth: "140px"
                  } : {}),
                  pointerEvents: "none",
                  backgroundColor: row.variant === "default" ? colors.G[75] : row.variant === "gray" ? colors.G[600] : colors.O[600],
                  color: row.variant === "default" ? colors.G[600] : colors.white
                }}>
                      Text
                    </Button>
                  </div>
                </td>
                <td style={{
              padding: "16px",
              textAlign: "center",
              borderBottom: "1px solid #e5e7eb"
            }}>
                  <div style={{
                display: "inline-block"
              }}>
                    <Button variant={row.variant} leftIcon={row.withIcon ? <Icon name="Noti" size="md" color="white" /> : undefined} disabled style={row.withIcon ? {
                  minWidth: "140px"
                } : undefined}>
                      Text
                    </Button>
                  </div>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gray"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...l.parameters?.docs?.source}}};const A=["AllStates","Default","Gray","Primary"];export{r as AllStates,a as Default,i as Gray,l as Primary,A as __namedExportsOrder,B as default};
