import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Terms and conditions for using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Course Enrollment and Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Course fees must be paid in full before the start date unless
                  installment arrangements are made
                </li>
                <li>
                  Prices are listed in Macedonian Denars (MKD) and are subject
                  to change
                </li>
                <li>
                  Registration is confirmed only after payment is received
                </li>
                <li>
                  Course materials and access are provided upon successful
                  enrollment
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Attendance and Participation
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Regular attendance is expected for optimal learning outcomes
                </li>
                <li>
                  Students must notify instructors in advance of any absences
                </li>
                <li>Makeup sessions may be available for missed classes</li>
                <li>
                  Disruptive behavior may result in removal from the course
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Refund Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Full refund available within 7 days of course start if not
                  satisfied
                </li>
                <li>
                  50% refund available within the first 25% of course duration
                </li>
                <li>No refunds after 25% of course completion</li>
                <li>Refunds processed within 14 business days</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                <li>All course materials are proprietary to Kodrum</li>
                <li>Students may not redistribute or share course content</li>
                <li>Recording of classes requires explicit permission</li>
                <li>Student work remains the property of the student</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Kodrum is not liable for indirect or consequential damages
                </li>
                <li>
                  Our liability is limited to the amount paid for the course
                </li>
                <li>
                  We do not guarantee specific learning outcomes or job
                  placement
                </li>
                <li>
                  Students are responsible for their own equipment and internet
                  connection
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Modifications
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We reserve the right to modify these terms at any time. Changes
                will be communicated to enrolled students via email. Continued
                use of our services constitutes acceptance of modified terms.
              </p>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>For questions about these terms, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> legal@kodrum.mk
                </p>
                <p>
                  <strong>Phone:</strong> +389 70 123 456
                </p>
                <p>
                  <strong>Address:</strong> Skopje, North Macedonia
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
