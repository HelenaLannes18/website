import Image from "next/image";

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center p-6">
                    <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>
                    <nav className="space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Home
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            About
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Blog
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <main className="bg-gray-200 py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        Welcome to My Blog
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore the latest articles and insights on web development.
                    </p>
                </div>
            </main>

            {/* Articles Section */}
            <section className="container mx-auto py-16 px-6 grid gap-8 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((post) => (
                    <div
                        key={post}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src="/image/blog-placeholder.jpg"
                            alt={`Blog Post ${post}`}
                            width={400}
                            height={200}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">
                                Blog Post Title {post}
                            </h3>
                            <p className="mt-2 text-gray-600">
                                A brief description of the blog post content goes here.
                            </p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-blue-600 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-6">
                <div className="container mx-auto text-center text-white">
                    <p>&copy; 2024 My Blog. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
