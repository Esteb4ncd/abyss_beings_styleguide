export default function HomePage() {
	return (
		<>
			<a className="skip-link" href="#styleguide">Skip to content</a>

			<header id="top" className="hero" aria-label="Intro hero">
				<div className="hero__inner container">
					<div className="hero__grid">
						<div className="hero__copy">
							<h1 className="hero__title">Abyss Beings</h1>
							<h2 className="hero__subtitle">StyleSketches & Styleguide</h2>
							<ul className="hero__meta">
								<li>Esteban Cruz Dominguez | A01409700</li>
								<li>MDIA 3106</li>
							</ul>
						</div>
						<div className="hero__viz" aria-hidden="true"></div>
					</div>
				</div>
			</header>

			<nav className="topnav" aria-label="Primary">
				<div className="container topnav__inner">
					<a className="brand" href="#top">Abyss Beings</a>
					<a href="#palette">Color Palette</a>
					<a href="#typography">Typography</a>
					<a href="#graphics">Graphics &amp; Icons</a>
				</div>
			</nav>

			<main>
				<section id="palette" className="section section--styleguide" aria-label="Color Palette">
					<div className="container">
						<h2>Color Palette</h2>
						<ul className="swatches">
							<li>
								<div className="swatch swatch--c2">
									<div className="swatch__inner">
										<div className="swatch__name">Primary</div>
										<div className="swatch__hex">#2F8F90</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c1">
									<div className="swatch__inner">
										<div className="swatch__name">Secondary</div>
										<div className="swatch__hex">#223652</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c5">
									<div className="swatch__inner">
										<div className="swatch__name">Accent</div>
										<div className="swatch__hex">#3AD4C0</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c3">
									<div className="swatch__inner">
										<div className="swatch__name">Background</div>
										<div className="swatch__hex">#050A1A</div>
									</div>
								</div>
							</li>
							<li>
								<div className="swatch swatch--c4">
									<div className="swatch__inner">
										<div className="swatch__name">Surface</div>
										<div className="swatch__hex">#101831</div>
									</div>
								</div>
							</li>
						</ul>
						<p>On dark backgrounds, use white text (90% body / 100% headings) for AA contrast.</p>
					</div>
				</section>

				<section id="typography" className="section" aria-label="Typography">
					<div className="container">
						<h2>Typography</h2>
						<div className="type-specimens">
							<div className="specimen">
								<div className="specimen__label">Display — Audiowide</div>
								<h1 style={{fontFamily: 'Audiowide, Raleway, sans-serif', letterSpacing: '1px'}}>Abyss Beings</h1>
							</div>
							<div className="specimen">
								<div className="specimen__label">H1 — 56/64 — 700</div>
								<h1>Abyss Beings</h1>
							</div>
							<div className="specimen">
								<div className="specimen__label">H2 — 40/48 — 700</div>
								<h2>Twilight Zone</h2>
							</div>
							<div className="specimen">
								<div className="specimen__label">H3 — 32/40 — 700</div>
								<h3>Bioluminescence</h3>
							</div>
							<div className="specimen grid-2">
								<div>
									<div className="specimen__label">Body — 18/28 — 400</div>
									<p>Life thrives where sunlight fails. Raleway body copy at 18/28 maintains ~60ch line length for readability.</p>
								</div>
								<div>
									<div className="specimen__label">Caption — 14/20 — 500</div>
									<p className="caption">Caption text for images and figures.</p>
								</div>
							</div>
						</div>
						<p className="type-notes">Sentence case; left‑aligned; hyphenation off; links use Primary with underline on hover/focus.</p>
					</div>
				</section>

				<section id="graphics" className="section" aria-label="Graphics and Icons">
					<div className="container">
						<h2>Graphics &amp; Icons</h2>
						<p className="caption">This will be the inspiration style when drawing creatures for each zone.</p>
						<div className="link-cards">
							<a className="link-card" href="https://ca.pinterest.com/pin/13370130138930594/" target="_blank" rel="noreferrer">
								<div className="link-card__media">
									{/* Direct preview image */}
									<img src="https://i.pinimg.com/736x/63/60/7b/63607b933a9bd6dc12fe8940c346135f.jpg" alt="Anglerfish inspiration" loading="lazy" />
								</div>
							</a>
							<a className="link-card" href="https://ca.pinterest.com/pin/3025924741423160/" target="_blank" rel="noreferrer">
								<div className="link-card__media">
									<img src="https://i.pinimg.com/1200x/15/f5/97/15f5978895b3026dbd8f594634d5369e.jpg" alt="Crab illustration inspiration" loading="lazy" />
								</div>
							</a>
						</div>
						<p className="caption">Sources: Pinterest references for anglerfish and crab styles.</p>
					</div>
				</section>
			</main>

			<footer id="footer" className="footer">
				<div className="container footer__inner">
					<p>Abyss Beings — Esteban Cruz Dominguez</p>
				</div>
			</footer>
		</>
	);
}


