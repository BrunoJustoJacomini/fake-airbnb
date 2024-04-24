import Link from "next/link";

export default function TopbarButton({children, href = ""}){
    return (
        <Link href={href} className="flex py-2 px-4 rounded hover:bg-slate-200">
            {children}
        </Link>
    )
}