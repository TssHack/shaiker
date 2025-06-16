const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// روت اصلی برای واکشی اطلاعات بازار USDTIRT
app.get('/usdtir', async (req, res) => {
  try {
    const response = await axios.get('https://api.nobitex.ir/v2/orderbook/USDTIRT');
    res.json(response.data);
  } catch (error) {
    console.error('خطا در دریافت داده:', error.message);
    res.status(500).json({ error: 'خطا در دریافت داده از نوبیتکس' });
  }
});

app.listen(PORT, () => {
  console.log(`🟢 سرور روی پورت ${PORT} اجرا شد: http://localhost:${PORT}/usdt-irt`);
});
