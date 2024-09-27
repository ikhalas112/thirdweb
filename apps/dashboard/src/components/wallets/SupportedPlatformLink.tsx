import { TrackedLinkTW } from "@/components/ui/tracked-link";
import { cn } from "@/lib/utils";
import { SiUnity } from "@react-icons/all-files/si/SiUnity";
import { ReactIcon } from "components/icons/brand-icons/ReactIcon";
import { TypeScriptIcon } from "components/icons/brand-icons/TypeScriptIcon";

export function SupportedPlatformLink(props: {
  platform: "React" | "React Native" | "Unity" | "TypeScript";
  href: string;
  trackingCategory: string;
  className?: string;
}) {
  let icon = ReactIcon;
  if (props.platform === "Unity") {
    icon = SiUnity;
  } else if (props.platform === "TypeScript") {
    icon = TypeScriptIcon;
  }

  return (
    <TrackedLinkTW
      category={props.trackingCategory}
      label={`platform-${props.platform.replace(" ", "-").toLowerCase()}`}
      href={props.href}
      target="_blank"
      className={cn(
        "flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground",
        props.className,
      )}
    >
      {icon({ className: "size-4" })}
      {props.platform}
    </TrackedLinkTW>
  );
}
