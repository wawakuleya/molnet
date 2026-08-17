import Image from "next/image";

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt="Molnet 红云"
      width={986}
      height={905}
      priority
      className={`object-contain ${className ?? ""}`}
    />
  );
}
