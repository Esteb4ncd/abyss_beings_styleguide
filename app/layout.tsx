import BackgroundScroller from "./BackgroundScroller";

export const metadata = {
	title: "Abyss Beings — The Ocean’s Oddities, Unveiled",
	description: "Interactive styleguide and mockups for Abyss Beings",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&family=Audiowide&display=swap" rel="stylesheet" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="stylesheet" href="/globals.css" />
				<script async defer src="https://assets.pinterest.com/js/pinit.js"></script>
			</head>
			<body>
				{/* Scroll-driven background color */}
				<BackgroundScroller />
				{children}
			</body>
		</html>
	);
}


