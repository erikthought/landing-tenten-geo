export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              Tenten GEO
            </div>
            <p className="text-gray-400 mb-4">
              Leading the future of search with cutting-edge Generative Engine Optimization strategies.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Tenten.co. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>GEO Strategy</li>
              <li>AI Search Optimization</li>
              <li>Content Analysis</li>
              <li>Technical GEO Audit</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@tenten.co</li>
              <li>Schedule Consultation</li>
              <li>Support Center</li>
              <li>Partner with Us</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            Ready to dominate AI search results? {" "}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Get started today
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}
