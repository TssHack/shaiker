const express = require('express');
const axios = require('axios');
const app = express();

// مسیر اصلی برای دریافت داده‌ها
app.get('/usdt-irt', async (req, res) => {
  try {
    const response = await axios.get('https://api.nobitex.ir/v2/orderbook/USDTIRT');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'خطا در دریافت داده از نوبیتکس' });
  }
});

// تبدیل express app به تابع قابل استفاده در Vercel
module.exports = app;
