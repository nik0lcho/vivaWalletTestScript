export async function VivaWallet_MakePay(_id_doc, _amount) {
  if (!_amount) throw "Няма сума за плащане!"; // -->
  const scheme = 'vivapayclient://pay/v1';
  const params = {
    appId: 'bg.gencloud.mobile',
    action: 'sale',
    clientTransactionId: _id_doc,    // unique ID for your tracking
    amount: Math.round(_amount * 100), // 1000 cents = €10.00
    tipAmount: '0',                  // бакшиш
    callback: window.location.origin,
    show_receipt: 'false',
    show_transaction_result: 'false',
    show_rating: 'false'
  };

const query = Object.entries(params)
  .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
  .join('&');


const url = `${scheme}?${query}`;

  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  a.target = "_blank";
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

