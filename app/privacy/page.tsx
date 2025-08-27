import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We collect information you provide directly to us, such as when
                you create an account, enroll in courses, or contact us. This
                may include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Payment information for course enrollment</li>
                <li>Educational background and course preferences</li>
                <li>Communications with our support team</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide and improve our educational services</li>
                <li>Process payments and manage your account</li>
                <li>Send you course updates and important notifications</li>
                <li>Respond to your questions and provide customer support</li>
                <li>Analyze usage patterns to enhance our platform</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Information Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>
                  Business partners for joint educational programs (with your
                  consent)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>Secure payment processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@kodrum.mk
              </p>
            </CardContent>
          </Card>

          <Card className="border-teal-100">
            <CardHeader>
              <CardTitle className="text-xl text-teal-700">
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Email:</strong> privacy@kodrum.mk
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
