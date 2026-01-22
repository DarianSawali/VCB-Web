export const metadata = {
  title: 'Give - City Blessing Church',
  description: 'Give to City Blessing Church',
}

export default function Give() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-secondary">
            WAYS TO GIVE
          </h1>
          
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              We believe giving is a privilege and an essential part of God&apos;s heart. The Father&apos;s heart is all about giving with love, sacrifice, and joy, and it is our privilege to give just as He has unconditionally given to us. We believe that as we give, we not only further the work of the Kingdom, but we invest in lives that will be transformed for His glory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* By: Cheque */}
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-6">By: Cheque</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Payable to:</p>
                  <p className="text-lg font-semibold text-secondary">Vancouver City Blessing</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Mailing Address:</p>
                  <p className="text-gray-700 leading-relaxed">
                    31094 RPO Thunderbird,<br />
                    Langley, BC V3M 3R4
                  </p>
                </div>
              </div>
            </div>

            {/* By: Online */}
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl text-secondary mb-6">By: Online</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Interac e-transfer:</p>
                  <p className="text-lg font-semibold text-secondary break-all">vancityblessing@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


