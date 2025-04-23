const Footer = () => {
	return (
	  <footer className="bg-gray-900 text-white py-10 mt-20">
		<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
		  
		  <div>
			<h2 className="text-xl font-bold mb-4">E-commerce</h2>
			<p className="text-sm">Your go-to online store for everything trendy and essential.</p>
		  </div>
  
		  
		  <div>
			<h3 className="text-lg font-semibold mb-3">Quick Links</h3>
			<ul className="space-y-2 text-sm">
			  <li><a href="/about" className="hover:underline">About Us</a></li>
			  <li><a href="/contact" className="hover:underline">Contact</a></li>
			  <li><a href="/faq" className="hover:underline">FAQ</a></li>
			  <li><a href="/returns" className="hover:underline">Returns</a></li>
			</ul>
		  </div>
  
		  <div>
			<h3 className="text-lg font-semibold mb-3">Customer Service</h3>
			<ul className="space-y-2 text-sm">
			  <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
			  <li><a href="/support" className="hover:underline">Support</a></li>
			  <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
			  <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
			</ul>
		  </div>
  
	
		  <div>
			<h3 className="text-lg font-semibold mb-3">Follow Us</h3>
			<div className="flex space-x-4">
			  <a href="#" aria-label="Facebook">🌐</a>
			  <a href="#" aria-label="Twitter">🐦</a>
			  <a href="#" aria-label="Instagram">📸</a>
			  <a href="#" aria-label="YouTube">▶️</a>
			</div>
		  </div>
		</div>
  
		<div className="text-center text-sm text-gray-400 mt-10">
		  © {new Date().getFullYear()} E-commerce. All rights reserved.
		</div>
	  </footer>
	);
  };
  
  export default Footer;
  