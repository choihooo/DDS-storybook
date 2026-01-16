import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as d}from"./index-CJceeV3S.js";import{B as l}from"./Button-CFFIWSXo.js";const e={white:"#FFF",G:{75:"#E4E5EA",600:"#4B5169"},O:{600:"#E86025"}},h={title:"Components/Button",component:l,args:{children:"Text"},argTypes:{variant:{control:"select",options:["default","gray","primary"]},full:{control:"boolean"},disabled:{control:"boolean"}},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0}]}},docs:{description:{component:`
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
        `}}}},o={render:()=>{const s=[{label:"default",variant:"default",withIcon:!1},{label:"gray",variant:"gray",withIcon:!1},{label:"primary",variant:"primary",withIcon:!1},{label:"primary",variant:"primary",withIcon:!0}];return n.jsx("div",{style:{padding:"24px"},children:n.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{padding:"12px",textAlign:"left",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"Button"}),n.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"default"}),n.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"pressed"}),n.jsx("th",{style:{padding:"12px",textAlign:"center",fontSize:"14px",fontWeight:600,color:"#111827",borderBottom:"1px solid #e5e7eb"},children:"disabled"})]})}),n.jsx("tbody",{children:s.map(t=>n.jsxs("tr",{children:[n.jsx("td",{style:{padding:"16px",fontSize:"14px",fontWeight:500,color:"#374151",borderBottom:"1px solid #e5e7eb",verticalAlign:"middle"},children:t.label}),n.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:n.jsx("div",{style:{display:"inline-block"},children:n.jsx(l,{variant:t.variant,leftIcon:t.withIcon?n.jsx(d,{name:"Noti",size:"md",color:"white"}):void 0,style:t.withIcon?{minWidth:"140px"}:void 0,children:"Text"})})}),n.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:n.jsx("div",{style:{display:"inline-block"},children:n.jsx(l,{variant:t.variant,leftIcon:t.withIcon?n.jsx(d,{name:"Noti",size:"md",color:"white"}):void 0,style:{...t.withIcon?{minWidth:"140px"}:{},pointerEvents:"none",backgroundColor:t.variant==="default"?e.G[75]:t.variant==="gray"?e.G[600]:e.O[600],color:t.variant==="default"?e.G[600]:e.white},children:"Text"})})}),n.jsx("td",{style:{padding:"16px",textAlign:"center",borderBottom:"1px solid #e5e7eb"},children:n.jsx("div",{style:{display:"inline-block"},children:n.jsx(l,{variant:t.variant,leftIcon:t.withIcon?n.jsx(d,{name:"Noti",size:"md",color:"white"}):void 0,disabled:!0,style:t.withIcon?{minWidth:"140px"}:void 0,children:"Text"})})})]},t.label))})]})})}},r={args:{variant:"default"}},i={args:{variant:"gray"}},a={args:{variant:"primary"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default"
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "gray"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...a.parameters?.docs?.source}}};const m=["AllStates","Default","Gray","Primary"];export{o as AllStates,r as Default,i as Gray,a as Primary,m as __namedExportsOrder,h as default};
