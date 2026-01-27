import svgPaths from "./svg-fh35nx482v";
import clsx from "clsx";

const NAV_SECTIONS = [
  {
    items: [
      { label: "Central Item 1", isActive: true, iconPath: svgPaths.p146a5300 },
      { label: "Central Item 2", iconPath: svgPaths.p146a5300 },
      { label: "Central Item 3", iconPath: svgPaths.p146a5300 },
    ]
  },
  {
    header: "OFFERINGS SECTION",
    items: [
      { label: "Offering Suite", iconPath: svgPaths.p146a5300, trailingIconPath: svgPaths.pff39380 },
      { label: "Offering Item 1", iconPath: svgPaths.p146a5300 },
      { label: "Offering Item 2", iconPath: svgPaths.p146a5300 },
      { label: "+13 more", isExpandLabel: true, iconPath: svgPaths.p93e1900 }, // Special case
    ]
  },
  {
    header: "MISCELLANEOUS",
    items: [
      { label: "Miscellaneous Item 1", iconPath: svgPaths.p146a5300 },
      { label: "Miscellaneous Item 2", iconPath: svgPaths.p146a5300 },
      { label: "Miscellaneous Item 3", iconPath: svgPaths.p146a5300 },
      { label: "Miscellaneous Item 4", iconPath: svgPaths.p146a5300 },
    ]
  }
];

const FOOTER_ITEMS = [
  { label: "Test Mode", iconPath: svgPaths.p353a9280, hasSwitch: true },
  { label: "Settings", iconPath: svgPaths.p146a5300 }
];

// --- Reusable Components ---

function Icon({ path, color }: { path: string, color: string }) {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <path d={path} fill={color} id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Switch() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Switch">
       <div className="content-stretch flex items-start relative shrink-0" data-name="root">
        <div className="content-stretch flex flex-col items-start justify-center p-[2px] relative shrink-0" data-name="wrapper">
             <div className="bg-[rgba(108,132,157,0.12)] content-stretch flex items-center p-[2px] relative rounded-[1000px] shrink-0 w-[28px]" data-name="track">
                <div className="relative shrink-0 size-[12px]" data-name="thumb">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <g id="thumb">
                    <circle cx="6" cy="6" fill="var(--fill-0, white)" id="thumb-circle" r="6" />
                    </g>
                </svg>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function SideNavItem({ 
    label, 
    isActive, 
    iconPath, 
    trailingIconPath, 
    isExpandLabel,
    hasSwitch,
    isHeader
}: { 
    label: string, 
    isActive?: boolean, 
    iconPath?: string, 
    trailingIconPath?: string,
    isExpandLabel?: boolean,
    hasSwitch?: boolean,
    isHeader?: boolean
}) {

    if (isHeader) {
        return (
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Side Nav Main Nav Item">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
                    <div className="bg-[rgba(255,255,255,0)] h-[20px] relative rounded-[4px] shrink-0 w-full" data-name="wrapper">
                        <div className="flex flex-row items-end size-full">
                            <div className="content-stretch flex items-end pl-[12px] pr-[4px] py-0 relative size-full">
                            <p className="css-ew64yg font-['Inter:Medium',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#768ea7] text-[10px]">{label}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (isExpandLabel) {
         return (
             <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Side Nav Main Nav Item">
                 <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
                    <div className="bg-[rgba(255,255,255,0)] h-[24px] relative rounded-[4px] shrink-0 w-full" data-name="wrapper">
                        <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center pl-[12px] pr-[4px] py-0 relative size-full">
                                <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
                                    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="root">
                                        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrapper">
                                            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="label">
                                                <div className="css-g0mm18 flex flex-col font-['Inter:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#243547] text-[12px] text-center">
                                                    <p className="css-ew64yg leading-[18px]">{label}</p>
                                                </div>
                                            </div>
                                            {iconPath && (
                                                <div className="content-stretch flex items-center relative shrink-0" data-name="trailing-icon">
                                                     <div className="relative shrink-0 size-[12px]" data-name="icon">
                                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                                            <g id="icon">
                                                            <path d={iconPath} fill="var(--fill-0, #243547)" id="Union" />
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
             </div>
         );
    }

    const textColor = isActive ? "text-[#305eff]" : "text-[#40566d]";
    const iconColor = isActive ? "var(--fill-0, #305EFF)" : "var(--fill-0, #40566D)";
    const wrapperBg = isActive ? "bg-[rgba(48,94,255,0.09)]" : "bg-[rgba(255,255,255,0)]";

    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name={hasSwitch ? "_Side Nav Test Nav Item" : "_Side Nav Main Nav Item"}>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="root">
                <div className={`${wrapperBg} h-[40px] relative rounded-[4px] shrink-0 w-full`} data-name="wrapper">
                    <div className="flex flex-row items-center size-full">
                         {/* Check padding differences. Test Mode has p-[8px] in Wrapper15, others pl-[12px] pr-[4px]. */}
                        <div className={`content-stretch flex gap-[8px] items-center ${hasSwitch ? "p-[8px]" : "pl-[12px] pr-[4px] py-0"} relative size-full`}>
                             <div className={`content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative ${hasSwitch ? "" : ""}`} data-name="container">
                                {iconPath && (
                                    <div className="content-stretch flex items-center relative shrink-0" data-name="leading-icon">
                                        <Icon path={iconPath} color={iconColor} />
                                    </div>
                                )}
                                <p className={`css-ew64yg font-['Inter:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 ${textColor} text-[14px]`}>{label}</p>
                             </div>

                             {trailingIconPath && (
                                 <div className="content-stretch flex items-center relative shrink-0" data-name="trailing-icon">
                                      <Icon path={trailingIconPath} color={iconColor} />
                                 </div>
                             )}

                             {hasSwitch && <Switch />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// --- Main Layout ---

function MainNav() {
  return (
    <div className="content-stretch flex h-full items-center overflow-clip relative shrink-0 w-[240px]" data-name="main-nav">
       <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="root">
            
            {/* Top Container */}
            <div className="content-stretch flex flex-col h-[648px] items-start relative shrink-0 w-full" data-name="top-container">
                <div className="relative shrink-0 w-full" data-name="main-container">
                    <div className="content-stretch flex flex-col gap-[20px] items-start pb-0 pt-[8px] px-[8px] relative w-full">
                        
                        {NAV_SECTIONS.map((section, idx) => (
                             <div key={idx} className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="stack">
                                {section.header && <SideNavItem label={section.header} isHeader />}
                                {section.items.map((item, i) => (
                                    <SideNavItem 
                                        key={i}
                                        label={item.label}
                                        isActive={item.isActive}
                                        iconPath={item.iconPath}
                                        trailingIconPath={item.trailingIconPath}
                                        isExpandLabel={item.isExpandLabel}
                                    />
                                ))}
                             </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* Bottom Container */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="bottom-container">
                <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-solid border-t inset-0 pointer-events-none" />
                <div className="relative shrink-0 w-full" data-name="footer-stack">
                    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[16px] pt-[12px] px-[12px] relative w-full">
                        {FOOTER_ITEMS.map((item, i) => (
                             <SideNavItem 
                                key={i}
                                label={item.label}
                                iconPath={item.iconPath}
                                hasSwitch={item.hasSwitch}
                             />
                        ))}
                    </div>
                </div>
            </div>

       </div>
    </div>
  );
}

export default function SideNavigation() {
  return (
    <div className="content-stretch flex isolate items-start relative size-full" data-name="Side Navigation">
       <div className="bg-[#f8fafc] content-stretch flex flex-col h-full items-start relative shrink-0 z-[1]" data-name="root">
            <div aria-hidden="true" className="absolute border-[rgba(108,132,157,0.18)] border-r border-solid inset-0 pointer-events-none" />
            <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-h-px min-w-px relative" data-name="wrapper">
                <MainNav />
            </div>
            <div className="absolute bg-gradient-to-b from-[#f8fafc] from-[28%] h-[28px] right-0 to-[rgba(255,255,255,0)] top-0 w-px" data-name="gradient-overlay" />
            <div className="absolute bg-gradient-to-b bottom-0 from-[28%] from-[rgba(255,255,255,0)] h-[28px] right-0 to-[#f8fafc] w-px" data-name="gradient-overlay" />
        </div>
    </div>
  );
}
