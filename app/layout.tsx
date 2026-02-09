import type { Metadata } from "next";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: "Marcela Monteiro Portfolio",
	description: "Portfólio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`
          ${inter.variable}
          ${poppins.variable}
          font-sans
          antialiased  relative overflow-x-hidden
        `}
			>
				{" "}
				<Header />
				{children}
			</body>
		</html>
	);
}
