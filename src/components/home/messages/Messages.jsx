// home/Messages.js
import React from 'react';

const Messages = () => {
  return (
    <div>
      <h2>Messages</h2>
      {/* Tambahkan beberapa pesan sebagai contoh */}
      <div>
        <p><strong>Jane Doe:</strong> Hai, apa kabar?</p>
        <span>2 hours ago</span>
      </div>
      <div>
        <p><strong>John Smith:</strong> Saya mengirimkan file yang diminta.</p>
        <span>1 day ago</span>
      </div>
      {/* Tambahkan lebih banyak pesan jika diperlukan */}
    </div>
  );
};

export default Messages;
