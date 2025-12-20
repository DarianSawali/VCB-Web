export const metadata = {
  title: 'Give - Vancouver City Blessing',
  description: 'Give to Vancouver City Blessing',
}

export default function Give() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-secondary">
            Give
          </h1>
          <p className="text-lg text-gray-700 text-center mb-16">
            Your generosity helps us serve our community and spread the love of Christ.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Interac E-Transfer */}
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="text-2xl text-secondary mb-8">Interac E-Transfer</h2>
              <p className="text-gray-700 mb-6">
                Send your donation via Interac E-Transfer to our church email.
              </p>
              <div className="bg-background rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Send to:</p>
                <p className="text-lg font-semibold text-secondary">give@vancouvercityblessing.org</p>
                <p className="text-sm text-gray-600 mt-4 mb-2">Security Question:</p>
                <p className="text-lg font-semibold text-secondary">What is the name of our church?</p>
                <p className="text-sm text-gray-600 mt-2">Answer: <span className="font-semibold">Vancouver City Blessing</span></p>
              </div>
              <p className="text-sm text-gray-600">
                Please include your name and address in the message for tax receipt purposes.
              </p>
            </div>

            {/* Online Cheque */}
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h2 className="text-2xl text-secondary mb-8">Online Cheque</h2>
              <p className="text-gray-700 mb-6">
                Make a donation using your bank's online cheque or bill payment service.
              </p>
              <div className="bg-background rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-2">Payee Name:</p>
                <p className="text-lg font-semibold text-secondary">Vancouver City Blessing</p>
                <p className="text-sm text-gray-600 mt-4 mb-2">Account Number:</p>
                <p className="text-lg font-semibold text-secondary">[Your Account Number]</p>
              </div>
              <p className="text-sm text-gray-600">
                Please include your name and address in the memo field for tax receipt purposes.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-secondary/10 rounded-lg p-8 md:p-12 text-center max-w-6xl mx-auto mt-8">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-secondary">Tax Receipts:</span> All donations are eligible for tax receipts.
            </p>
            <p className="text-gray-700">
              Receipts will be issued at the end of the tax year.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


