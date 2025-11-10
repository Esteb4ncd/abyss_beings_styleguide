"use client";

import { useEffect } from "react";

const palette = ["#101831", "#050A1A", "#000000"];

function hexToRgb(hex: string) {
	const v = hex.replace("#", "");
	const bigint = parseInt(v, 16);
	return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}

function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t;
}

function mix(hex1: string, hex2: string, t: number) {
	const c1 = hexToRgb(hex1);
	const c2 = hexToRgb(hex2);
	const r = Math.round(lerp(c1.r, c2.r, t));
	const g = Math.round(lerp(c1.g, c2.g, t));
	const b = Math.round(lerp(c1.b, c2.b, t));
	return `rgb(${r}, ${g}, ${b})`;
}

export default function BackgroundScroller() {
	useEffect(() => {
		const onScroll = () => {
			const doc = document.documentElement;
			const max = doc.scrollHeight - doc.clientHeight || 1;
			const p = Math.min(1, Math.max(0, window.scrollY / max));
			const segment = 1 / (palette.length - 1);
			const idx = Math.min(palette.length - 2, Math.floor(p / segment));
			const localT = (p - idx * segment) / segment;
			const color = mix(palette[idx], palette[idx + 1], localT);
			document.body.style.backgroundColor = color;
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	return null;
}


