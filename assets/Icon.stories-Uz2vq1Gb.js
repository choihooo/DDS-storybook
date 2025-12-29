import{j as n}from"./jsx-runtime-u17CrQMm.js";import{I as a,i as p,a as e}from"./index-MrHY3-sW.js";const g={title:"Components/Icon",component:a},c=Object.keys(e),r={args:{name:"ArrowRight",size:"md"},render:()=>n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{marginBottom:"32px",fontSize:"24px",fontWeight:700},children:"Icon Playground"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:"24px"},children:c.map(i=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[n.jsx(a,{name:i,size:"md"}),n.jsx("div",{style:{fontSize:"12px",color:"#6b7280",textAlign:"center",wordBreak:"break-word"},children:i})]},i))})]})},s={args:{name:"ArrowRight",size:"md"},render:()=>{const i=["xs","sm","md","lg","xl"];return n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{marginBottom:"32px",fontSize:"24px",fontWeight:700,textAlign:"center"},children:"Icon Sizes"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:i.map(o=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px",backgroundColor:"#ffffff"},children:[n.jsx(a,{name:"ArrowRight",size:o}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"2px"},children:o}),n.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af"},children:[p[o],"px"]})]})]},o))})]})}},d={args:{name:"Warning",size:"md"},render:()=>{const i=[{name:"Default",color:void 0},{name:"Red",color:"#ef4444"},{name:"Blue",color:"#3b82f6"},{name:"Green",color:"#10b981"},{name:"Orange",color:"#f97316"}];return n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{marginBottom:"32px",fontSize:"24px",fontWeight:700},children:"Icon Colors"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:i.map(({name:o,color:l})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:[n.jsx(a,{name:"Warning",size:"md",color:l}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"4px"},children:o}),n.jsx("div",{style:{fontSize:"12px",color:"#6b7280"},children:l||"inherit"})]})]},o))})]})}},t={args:{name:"ArrowRight",size:"md"},render:()=>n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{marginBottom:"32px",fontSize:"24px",fontWeight:700},children:"Static Icons (Icon.ArrowRight)"}),n.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[n.jsx(e.ArrowRight,{size:"md"}),n.jsx(e.ArrowLeft,{size:"md"}),n.jsx(e.ArrowTop,{size:"md"}),n.jsx(e.ArrowDown,{size:"md"}),n.jsx(e.Plus,{size:"md"}),n.jsx(e.Minus,{size:"md"}),n.jsx(e.Close,{size:"md"}),n.jsx(e.CheckBoxEnabled,{size:"md"}),n.jsx(e.CheckBoxDisabled,{size:"md"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "ArrowRight",
    size: "md"
  },
  render: () => <div style={{
    padding: "24px"
  }}>
      <h2 style={{
      marginBottom: "32px",
      fontSize: "24px",
      fontWeight: 700
    }}>
        Icon Playground
      </h2>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
      gap: "24px"
    }}>
        {iconNames.map(name => <div key={name} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        padding: "16px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px"
      }}>
            <Icon name={name} size="md" />
            <div style={{
          fontSize: "12px",
          color: "#6b7280",
          textAlign: "center",
          wordBreak: "break-word"
        }}>
              {name}
            </div>
          </div>)}
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "ArrowRight",
    size: "md"
  },
  render: () => {
    const sizes: IconSize[] = ["xs", "sm", "md", "lg", "xl"];
    return <div style={{
      padding: "24px"
    }}>
        <h2 style={{
        marginBottom: "32px",
        fontSize: "24px",
        fontWeight: 700,
        textAlign: "center"
      }}>
          Icon Sizes
        </h2>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}>
          {sizes.map(size => <div key={size} style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "16px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          backgroundColor: "#ffffff"
        }}>
              <Icon name="ArrowRight" size={size} />
              <div>
                <div style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "2px"
            }}>
                  {size}
                </div>
                <div style={{
              fontSize: "12px",
              color: "#9ca3af"
            }}>
                  {iconSize[size]}px
                </div>
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Warning",
    size: "md"
  },
  render: () => {
    const colors = [{
      name: "Default",
      color: undefined
    }, {
      name: "Red",
      color: "#ef4444"
    }, {
      name: "Blue",
      color: "#3b82f6"
    }, {
      name: "Green",
      color: "#10b981"
    }, {
      name: "Orange",
      color: "#f97316"
    }];
    return <div style={{
      padding: "24px"
    }}>
        <h2 style={{
        marginBottom: "32px",
        fontSize: "24px",
        fontWeight: 700
      }}>
          Icon Colors
        </h2>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px"
      }}>
          {colors.map(({
          name,
          color
        }) => <div key={name} style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "16px",
          border: "1px solid #e5e7eb",
          borderRadius: "8px"
        }}>
              <Icon name="Warning" size="md" color={color} />
              <div>
                <div style={{
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "4px"
            }}>
                  {name}
                </div>
                <div style={{
              fontSize: "12px",
              color: "#6b7280"
            }}>
                  {color || "inherit"}
                </div>
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "ArrowRight",
    size: "md"
  },
  render: () => <div style={{
    padding: "24px"
  }}>
      <h2 style={{
      marginBottom: "32px",
      fontSize: "24px",
      fontWeight: 700
    }}>
        Static Icons (Icon.ArrowRight)
      </h2>
      <div style={{
      display: "flex",
      gap: "16px",
      flexWrap: "wrap"
    }}>
        <Icons.ArrowRight size="md" />
        <Icons.ArrowLeft size="md" />
        <Icons.ArrowTop size="md" />
        <Icons.ArrowDown size="md" />
        <Icons.Plus size="md" />
        <Icons.Minus size="md" />
        <Icons.Close size="md" />
        <Icons.CheckBoxEnabled size="md" />
        <Icons.CheckBoxDisabled size="md" />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const f=["Playground","Sizes","Colors","StaticIcons"];export{d as Colors,r as Playground,s as Sizes,t as StaticIcons,f as __namedExportsOrder,g as default};
