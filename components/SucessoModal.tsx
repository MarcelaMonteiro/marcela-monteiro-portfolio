"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog";

type Props = {
	open: boolean;
	setOpen: (value: boolean) => void;
	variant?: "success" | "error";
};

export function SuccessoModal({ open, setOpen, variant }: Props) {
	const isSuccess = variant === "success";

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent
				className="
          bg-[#420D4B]
          border border-white/10
          text-[#F5D5E0]
          rounded-2xl
        "
			>
				<DialogHeader>
					<DialogTitle className="text-2xl">
						{isSuccess ? "Mensagem enviada 💜" : "Erro ao enviar 😢"}
					</DialogTitle>

					<DialogDescription className="text-white/70">
						{isSuccess
							? "Obrigada por entrar em contato! Vou responder em breve."
							: "Algo deu errado. Tente novamente daqui a pouco."}
					</DialogDescription>
				</DialogHeader>

				<DialogFooter>
					<button
						onClick={() => setOpen(false)}
						className=" cursor-pointer
      px-6 py-2
      rounded-full
      bg-[#7B337E]
      hover:bg-[#9B4AA0]
      text-white
      font-semibold
      transition
    "
					>
						OK
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
