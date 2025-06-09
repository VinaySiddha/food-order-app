import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
	{ name: "Ice-Cream", image: "/images/icecream.png" },
	{ name: "Butter Milk", image: "/images/buttermilk.png" },
	{ name: "Lassi", image: "/images/lassi.png" },
	{ name: "Snacks", image: "/images/snacks.png" },
	{ name: "Maggie", image: "/images/maggie.png" },
	{ name: "Sizzling Brownie", image: "/images/brownie.png" },
	{ name: "Combo Offer", image: "/images/combo.png" },
];

function HomePage() {
	const navigate = useNavigate();

	const handleCategoryClick = (categoryName) => {
		navigate(`/category/${encodeURIComponent(categoryName)}`);
	};

	return (
		<div>
			<h1 style={{ textAlign: "center", margin: "32px 0 24px 0" }}>
				Menu Categories
			</h1>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "2rem",
					justifyContent: "center",
					marginTop: 20,
				}}
			>
				{categories.map((cat) => (
					<div
						key={cat.name}
						onClick={() => handleCategoryClick(cat.name)}
						style={{
							cursor: "pointer",
							textAlign: "center",
							width: 140,
							border: "1px solid #eee",
							borderRadius: 12,
							padding: 16,
							boxShadow: "0 2px 8px #eee",
							background: "#fff",
							transition: "transform 0.2s",
						}}
						onMouseEnter={(e) =>
							(e.currentTarget.style.transform = "scale(1.05)")
						}
						onMouseLeave={(e) =>
							(e.currentTarget.style.transform = "scale(1)")
						}
					>
						<img
							src={cat.image}
							alt={cat.name}
							style={{
								width: 80,
								height: 80,
								objectFit: "contain",
								marginBottom: 8,
							}}
						/>
						<div style={{ fontWeight: "bold" }}>{cat.name}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default HomePage;