"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="fixed  inset-x-0 z-50 ">
			<nav
				className="hidden md:block p-4  bg-[rgba(33,6,53,0.55)]
    backdrop-blur-xl
    border-b border-white/10 "
			>
				<div className="flex gap-10 items-end justify-end px-3">
					<Link
						href="/"
						className="
         inline-flex
    px-4 py-2
    rounded-full
    text-white/80
    hover:text-[#F5D5E0]
    hover:bg-white/10
    hover:shadow-[0_0_15px_rgba(245,213,224,0.25)]
    transition"
					>
						Início
					</Link>
					<Link
						href="/sobre"
						className="
         inline-flex
    px-4 py-2
    rounded-full
    text-white/80
    hover:text-[#F5D5E0]
    hover:bg-white/10
    hover:shadow-[0_0_15px_rgba(245,213,224,0.25)]
    transition"
					>
						Sobre mim
					</Link>
					<Link
						href="/projetos"
						className="
         inline-flex
    px-4 py-2
    rounded-full
    text-white/80
    hover:text-[#F5D5E0]
    hover:bg-white/10
    hover:shadow-[0_0_15px_rgba(245,213,224,0.25)]
    transition"
					>
						Projetos
					</Link>
					<Link
						href="/conhecimentos"
						className="
         inline-flex
    px-4 py-2
    rounded-full
    text-white/80
    hover:text-[#F5D5E0]
    hover:bg-white/10
    hover:shadow-[0_0_15px_rgba(245,213,224,0.25)]
    transition"
					>
						Conhecimentos
					</Link>
					<Link
						href="/contato"
						className="
         inline-flex
    px-4 py-2
    rounded-full
    text-white/80
    hover:text-[#F5D5E0]
    hover:bg-white/10
    hover:shadow-[0_0_15px_rgba(245,213,224,0.25)]
    transition"
					>
						Contato
					</Link>
				</div>
			</nav>

			<div
				className="flex items-end justify-end p-4 md:hidden fixed w-full overflow-hidden bg-[rgba(33,6,53,0.55)]
    backdrop-blur-xl
    border-b border-white/10 "
			>
				<button onClick={() => setOpen(!open)} className=" md:hidden  ">
					{open ? <X /> : <Menu />}
				</button>
			</div>
			{open && (
				<div className="md:hidden fixed left-0 w-full inset-14  bg-black/50 h-[100vh]  ">
					<div
						className="absolute  left-1/2 -translate-x-1/2
        w-full 
      rounded-b-xl
        bg-[linear-gradient(135deg,rgba(123,51,126,0.75)_0%,rgba(66,13,75,0.65)_100%)]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        p-6
        animate-slideDown"
					>
						<nav className="flex flex-col  gap-4 text-white font-medium ">
							<Link
								href="/"
								className="drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
								onClick={() => setOpen(false)}
							>
								Início
							</Link>

							<Link
								href="/sobre"
								className="drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
								onClick={() => setOpen(false)}
							>
								Sobre mim
							</Link>

							<Link
								href="/projetos"
								className="drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
								onClick={() => setOpen(false)}
							>
								Projetos
							</Link>
							<Link
								href="/conhecimentos"
								className="drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
								onClick={() => setOpen(false)}
							>
								Conhecimentos
							</Link>
							<Link
								href="/contato"
								className="drop-shadow-[0_0_15px_rgba(245,213,224,0.8)]"
								onClick={() => setOpen(false)}
							>
								Contato
							</Link>
						</nav>
					</div>
				</div>
			)}
		</header>
	);
}
