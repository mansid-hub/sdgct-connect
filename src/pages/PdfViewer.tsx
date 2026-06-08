import { useEffect } from "react";
import { useParams } from "react-router-dom";
import termsConditionsPdf from "@/assets/terms-conditions.pdf.asset.json";
import privacyPolicyPdf from "@/assets/privacy-policy.pdf.asset.json";
import refundCancellationPdf from "@/assets/refund-cancellation.pdf.asset.json";

const DOCS: Record<string, { title: string; url: string }> = {
  "terms-and-conditions": { title: "Terms & Conditions", url: termsConditionsPdf.url },
  "privacy-policy": { title: "Privacy Policy", url: privacyPolicyPdf.url },
  "refund-and-cancellation": { title: "Refund & Cancellation", url: refundCancellationPdf.url },
};

const PdfViewer = () => {
  const { slug = "" } = useParams();
  const doc = DOCS[slug];

  useEffect(() => {
    if (doc) document.title = doc.title;
  }, [doc]);

  if (!doc) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground">
        Document not found.
      </div>
    );
  }

  return (
    <div className="fixed inset-0">
      <object data={doc.url} type="application/pdf" className="w-full h-full">
        <iframe src={doc.url} title={doc.title} className="w-full h-full border-0" />
      </object>
    </div>
  );
};

export default PdfViewer;
