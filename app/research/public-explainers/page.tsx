export default function PublicExplainersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center">Public Explainers</h1>

          
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Explore our public explainers series.
              </p>
            </div>
            

            {/* Measuring Trust, Mistrust and Distrust */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 max-w-md mx-auto mb-8">
              <a 
                href="/POAL_explainer_measuring_TMD.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                {/* Measuring Trust, Mistrust and Distrust Image */}
                <div className="mb-6 relative overflow-hidden rounded-lg h-48 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/POAL_explainer_measuring_TMD.jpg" 
                    alt="Measuring Trust, Mistrust and Distrust Public Explainer"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Measuring Trust, Mistrust and Distrust
                  </h3>
                  <p className="text-gray-500 text-xs font-medium mb-2">By Dan Devine and Mollie Ruler</p>
                  <p className="text-gray-600 text-sm mb-4">
                    This explainer outlines research measuring three orientations of political trust - trust, mistrust, and distrust.
                  </p>
                  <div className="inline-flex items-center text-blue-600 font-medium text-sm">
                    <span>Download PDF</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>


            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                More public explainers coming soon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
