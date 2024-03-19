// components/Footer.js
const Footer = () => {
    return (
        <footer id="about" className="bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-wrap justify-between items-center">
                <div className="flex flex-col mb-6 md:mb-0">
                    <div className="bg-orange-500 text-white p-4 w-48 text-center mb-4">
                        <h3 className="font-semibold">HR Leaders Institute</h3>
                    </div>
                    <p className="text-gray-400 text-sm text-left w-[240px]">
                        We have been in the industry for the past 4 years and we must say it has
                        been a real pleasure to have all the leaders on board.
                    </p>
                </div>

                <div className="flex flex-col mb-6 md:mb-0">
                    <h4 className="font-semibold text-gray-300 mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-gray-200">About us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-200">Our services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-gray-200">Insight and trends</a></li>
                    </ul>
                </div>

                <div className="flex flex-col mb-6 md:mb-0">
                    <h4 className="font-semibold text-gray-300 mb-4">Follow us:</h4>
                    <div className="flex space-x-3 mb-4">
                        {/* Replace these spans with your actual icons */}
                        <span className="text-gray-400 hover:text-gray-200">🔗</span>
                        <span className="text-gray-400 hover:text-gray-200">🔗</span>
                        <span className="text-gray-400 hover:text-gray-200">🔗</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">Contact: 9860879045</p>
                    <p className="text-gray-400 text-sm">Address: Chyasundol-06, Golfutar</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
