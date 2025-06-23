import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/images/WalletWhiz.png"
        alt="WalletWhiz"
        width={52}
        height={52}
      />
      <span className="text-xl font-bold text-primary">WalletWhiz</span>
    </Link>
  );
}
