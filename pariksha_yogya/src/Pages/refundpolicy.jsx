import React from "react";
import Footer from "@/components/Footer/footer";

function RefundPolicy() {
  return (
    <div>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p>
            At Pariksha Yogya, we strive to ensure your satisfaction with our services. This Refund Policy outlines the circumstances under which we may provide refunds for subscription fees or purchases made on our platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Subscription Services</h2>
          <p className="mb-2">
            For subscription-based services, the following refund policies apply:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">7-Day Trial Period:</span> New premium subscribers may request a full refund within 7 days of initial purchase if they are unsatisfied with the service. This trial period applies only to first-time subscribers.
            </li>
            <li>
              <span className="font-medium">Monthly Subscriptions:</span> After the 7-day trial period, monthly subscription payments are generally non-refundable once the service has been accessed or used.
            </li>
            <li>
              <span className="font-medium">Annual Subscriptions:</span> For annual subscription plans, partial refunds may be considered on a pro-rata basis for the unused portion of the subscription if requested within 30 days of purchase.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">One-Time Purchases</h2>
          <p className="mb-2">
            For one-time purchases of digital materials or services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Digital Products:</span> Due to the nature of digital products, all purchases of downloadable materials, roadmaps, or resources are final and non-refundable once access has been provided.
            </li>
            <li>
              <span className="font-medium">Technical Issues:</span> If you experience technical difficulties that prevent you from accessing purchased content, please contact our support team within 48 hours of purchase. We will work to resolve the issue or process a refund if the problem cannot be fixed.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Eligibility for Refunds</h2>
          <p className="mb-2">Refunds may be considered in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service unavailability for extended periods not caused by scheduled maintenance</li>
            <li>Major technical issues that prevent access to key features</li>
            <li>Incorrect billing or duplicate charges</li>
            <li>Significant deviation from advertised services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Non-Refundable Items</h2>
          <p className="mb-2">The following are generally not eligible for refunds:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscriptions canceled after the refund eligibility period</li>
            <li>Digital content that has been downloaded or accessed</li>
            <li>Services that have been partially or fully utilized</li>
            <li>Purchases made using promotional codes or discounts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">How to Request a Refund</h2>
          <p className="mb-2">
            To request a refund, please contact our support team at <a href="mailto:askparikshasetu@gmail.com" className="text-blue-600 hover:underline">askparikshasetu@gmail.com</a> with the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your full name and email address associated with your account</li>
            <li>Date of purchase</li>
            <li>Order/transaction ID (if available)</li>
            <li>Reason for requesting a refund</li>
            <li>Any relevant screenshots or documentation</li>
          </ul>
          <p className="mt-2">
            All refund requests will be reviewed within 5-7 business days, and our team will contact you regarding the status of your request.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Payment Processing</h2>
          <p>
            Approved refunds will be processed using the original payment method used for the purchase. Depending on your payment provider, it may take 5-10 business days for the refund to appear in your account.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. It is your responsibility to review our Refund Policy periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions about our Refund Policy, please contact us at <a href="mailto:askparikshasetu@gmail.com" className="text-blue-600 hover:underline">askparikshasetu@gmail.com</a>.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">Last Updated: March 21, 2025</p>
      </div>

     
    </div>
     <div className="w-full p-4 pt-0 m-auto">
     <Footer />
   </div>
    </div>

  );
}

export default RefundPolicy;