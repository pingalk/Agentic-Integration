import svgPaths from "./svg-4m4pjggzn0";

function Plus() {
  return (
    <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="plus">
          <path d={svgPaths.p83dad00} fill="var(--fill-0, #768EA7)" id="path" />
        </g>
      </svg>
    </div>
  );
}

export default function AttachmentsIcon() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] relative rounded-[8px] size-full" data-name="Attachments Icon">
      <div className="absolute inset-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-2px_0px_0px_rgba(255,255,255,0.2),inset_0px_2px_0px_0px_rgba(255,255,255,0.2)]" />
      </div>
      <Plus />
    </div>
  );
}