import React from 'react';

import pdfUrl from './../assets/mycv.pdf';


function PdfPreviewPage() {
  return (
    <div >
      <iframe src={pdfUrl} style={{width:"100vw",height:"100vh"}} ></iframe>
    </div>
  );
}

export default PdfPreviewPage;
