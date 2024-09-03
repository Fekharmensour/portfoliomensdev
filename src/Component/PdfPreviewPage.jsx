import React from 'react';

import pdfUrl from './../assets/mycv.pdf';


function PdfPreviewPage() {
  return (
    <div >
      <iframe src={pdfUrl} width="100%" height="900px"></iframe>
    </div>
  );
}

export default PdfPreviewPage;
