import Script from "next/script";
import { getClarityProjectId } from "@/lib/analytics";

/** Microsoft Clarity — afterInteractive so it does not compete with AdSense for first paint. */
export default function ClarityScript() {
  const projectId = getClarityProjectId();
  if (!projectId) return null;

  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];if(y&&y.parentNode){y.parentNode.insertBefore(t,y);}else{document.head.appendChild(t);}})(window,document,"clarity","script","${projectId}");`,
      }}
    />
  );
}
